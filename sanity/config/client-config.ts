import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2ei1rv0c",
  dataset: "production",
  apiVersion: "2023-04-25",
  useCdn: true,
});
