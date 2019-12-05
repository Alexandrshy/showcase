import * as React from "react"
import { Link } from "gatsby"

const MENU = [
  {
    title: "About",
    path: "/about",
  },
]

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          {MENU.map(({ title, path }) => (
            <li>
              <a href={path}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
