module.exports = {
    "stories": [
      "../stories/(components|layouts|pages|utilities)/**/*.stories.mdx",
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions",
      "@storybook/addon-docs"
    ],
    "framework": "@storybook/angular",
    "core": {
      "builder": "@storybook/builder-webpack5"
    },
  }