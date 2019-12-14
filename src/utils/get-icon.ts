import { ICONS } from "../constants"

export const getIcon = (name: string) => {
  let icon

  switch (name) {
    case "github":
      icon = ICONS.GITHUB
      break
    case "linkedin":
      icon = ICONS.LINKEDIN
      break
    case "telegram":
      icon = ICONS.TELEGRAM
      break
    case "twitter":
      icon = ICONS.TWITTER
      break
    default:
      icon = {}
      break
  }

  return icon
}
