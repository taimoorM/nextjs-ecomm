import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  //studio base path
  basePath: "/studio",

  //project id/dataset
  projectId,
  dataset,

  //plugins
  plugins: [deskTool(), visionTool()],

  //schemas
  schema: {
    types: schemaTypes,
  },
});
