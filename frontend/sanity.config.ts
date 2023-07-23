import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas"

const config = defineConfig({
    projectId: "s31ppe40",
    dataset: "production",
    title: "Personal Website",
    apiVersion: "2023-07-21",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config;