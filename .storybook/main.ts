import type { StorybookConfig } from "@storybook/nextjs";
import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    // Add any other addons you were using
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        viteConfigPath: "./vite.config.js", // Optional: specify your main vite config file
      },
    },
  },
  staticDirs: ["../public"],
  // Keep the viteFinal function to configure plugins like svgr
  async viteFinal(config, { configType }) {
    // Add the svgr plugin to handle SVG imports
    return mergeConfig(config, {
      plugins: [svgr()],
    });
  },
};

export default config;
// import type { StorybookConfig } from "@storybook/nextjs-vite";
// import { mergeConfig } from "vite";
// import svgr from "vite-plugin-svgr";

// const config: StorybookConfig = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//   addons: [
//     "@chromatic-com/storybook",
//     "@storybook/addon-docs",
//     "@storybook/addon-a11y",
//     "@storybook/addon-vitest",
//   ],
//   framework: {
//     name: "@storybook/nextjs-vite",
//     options: {},
//   },
//   staticDirs: ["../public"],
//   // 👇 Add this field
//   viteFinal: async (config) => {
//     return mergeConfig(config, {
//       plugins: [svgr()],
//     });
//   },
// };
// export default config;

// // import type { StorybookConfig } from "@storybook/nextjs-vite";

// // const config: StorybookConfig = {
// //   "stories": [
// //     "../src/**/*.mdx",
// //     "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
// //   ],
// //   "addons": [
// //     "@chromatic-com/storybook",
// //     "@storybook/addon-docs",
// //     "@storybook/addon-a11y",
// //     "@storybook/addon-vitest"
// //   ],
// //   "framework": {
// //     "name": "@storybook/nextjs-vite",
// //     "options": {}
// //   },
// //   "staticDirs": [
// //     "..\\public"
// //   ]
// // };
// // export default config;
