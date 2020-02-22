const siteConfig = require("./config")

if (process.env.NODE_ENV === "development") {
  require("dotenv").config()
}

module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    url: siteConfig.url,
    name: siteConfig.name,
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
        path: `${__dirname}/content/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/img`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/static/svg/`,
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {
                sh: "shell",
                es6: "javascript",
                env: "bash",
                mdx: "md",
                ".json": "json",
              },
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
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
    "gatsby-plugin-typescript",
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
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
  ],
}
