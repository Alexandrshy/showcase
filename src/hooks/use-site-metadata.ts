import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          url
          github {
            name
            repo
          }
          name
          title
          description
          menu {
            label
            path
          }
          author {
            name
            surname
            contacts {
              email
              skype {
                url
                name
              }
              telegram
              twitter
              github
              linkedin
            }
            workPlace {
              name
              url
            }
          }
          social {
            label
            path
          }
        }
      }
    }
  `)

  return site.siteMetadata
}
