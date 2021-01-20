module.exports = {
  siteMetadata: {
    title: "Figma Portfolio UI",
    titleTemplate: "%s · Designing and coding",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    url: "https://www.doe.com", // No trailing slash allowed!
    author: "@mobprogramming",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./posts",
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "works",
        path: "./works",
      },
      __key: "works",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Heebo:400,500,700,900"],
        },
      },
    },
  ],
};
