import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "2ei1rv0c",
  dataset: "production",
  apiVersion: "2023-04-25",
  useCdn: true,
});

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
  console.log(slug);
  const project = await client.fetch<Project>(
    groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    alt,
}`,
    { slug }
  );

  return project;
};
