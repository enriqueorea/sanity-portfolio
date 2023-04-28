import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { project, page } from "./sanity/schemas/";

export const config = defineConfig({
  projectId: "2ei1rv0c",
  dataset: "production",
  apiVersion: "2023-04-25",
  title: "My Sanity Studio Porfolio",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: [project, page],
  },
});
