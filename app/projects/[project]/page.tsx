import { getProject } from "@/sanity/sanity-utils";
import { NextPage } from "next";
import { FC } from "react";

interface IProps {
  params: {
    project: string;
  };
}

const ProjectPage = async ({ params }: IProps) => {
  console.log(params);
  const slug = params.project;
  const project = await getProject(slug);
  console.log(slug);
  return <div>Projec .....{project.name}</div>;
};

export default ProjectPage;
