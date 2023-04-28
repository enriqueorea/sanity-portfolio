import { Project } from "@/types/project";
import { groq } from "next-sanity";
import { client } from "./config/client-config";
import { Page } from "@/types/pages";

export const getProjects = async (): Promise<Project[]> => {
  const projects = await client.fetch<Project[]>(groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        alt,
    }`);

  return projects;
};

export const getProject = async (slug: string): Promise<Project> => {
  const project = await client.fetch<Project>(
    groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    content,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    alt,
}`,
    { slug }
  );

  return project;
};

export const getPages = async (): Promise<Page[]> => {
  const pages = await client.fetch<Page[]>(groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content,
    }`);

  return pages;
};

export const getPage = async (slug: string): Promise<Page> => {
  const page = await client.fetch<Page>(
    groq`*[_type == "page" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    content,
}`,
    { slug }
  );

  return page;
};
