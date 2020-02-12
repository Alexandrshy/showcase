import CMS from "netlify-cms-app"

import AboutPagePreview from "./templates/about"
import BlogPostPreview from "./templates/blog"
import IndexPagePreview from "./templates/index"

CMS.CMS.registerPreviewTemplate("index", IndexPagePreview)
CMS.CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.CMS.registerPreviewTemplate("blog", BlogPostPreview)
