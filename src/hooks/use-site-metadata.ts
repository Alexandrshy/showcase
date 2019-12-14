import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          url
          title
          description
          menu {
            label
            path
          }
          author {
            name
            photo
            contacts {
              email
              telegram
              twitter
              github
              linkedin
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
