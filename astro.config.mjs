import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import * as fs from "node:fs";
import * as path from "node:path";

const filenames = fs.readdirSync("./src/storyblok");
const components = filenames
  .filter((file) => path.extname(file) === ".astro")
  .map((file) => path.basename(file, ".astro"))
  .reduce((acc, name) => ((acc[name] = name), acc), {});

console.log("components: ", JSON.stringify(components, null, 2));

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      // Fake token
      accessToken: "76pb7A3uFQlquL5sUW4Nngrr",
      components,
      bridge: false,
      componentsDir: "src/storyblok",
    }),
  ],
});
