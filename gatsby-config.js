const siteConfig = require("./config")

if (process.env.NODE_ENV === "development") {
  require("dotenv").config()
}

module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    menu: siteConfig.menu,
    author: siteConfig.author,
    social: siteConfig.social,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    // Exposes several image processing functions built on the Sharp image processing library
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify-cms",
    // Add a manifest file
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Blog by Alexandr Shulaev",
        short_name: "Blog by Alexandr Shulaev",
        start_url: "/",
        background_color: "#f1db4f",
        theme_color: "#31332f",
        icon: `src/images/icon.png`,
      },
    },
    // Parse all markdown files
    "gatsby-transformer-remark",
    // Add typescript
    "gatsby-plugin-typescript",
    // Add google font
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `500`, `700`],
          },
        ],
      },
    },
  ],
}
