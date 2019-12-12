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
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // Add a manifest file
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Blog by Alexandr Shulaev",
        short_name: "Blog by Alexandr Shulaev",
        start_url: "/",
        background_color: "#f1db4f",
        theme_color: "#31332f",
        icon: "static/favicon.ico",
        include_favicon: true,
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
