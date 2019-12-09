import React from "react"
import { Link } from "gatsby"

import style from "./menu.module.css"

const MENU = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Resume",
    path: "/resume",
  },
]

export const Menu: React.FC = () => (
  <nav className={style.nav} aria-labelledby="mainmenulabel">
    <div className={style.wrapper}>
      <h4 id="mainmenulabel" className="visuallyhidden">
        Main menu
      </h4>
      <ul className={style.list}>
        {MENU.map(({ title, path }, index) => (
          <li key={`${title}-${index}`} className={style.item}>
            <Link
              to={path}
              className={style.link}
              activeStyle={{
                fontWeight: "var(--font-weight-medium)",
                color: "var(--menu-link-color-active)",
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)
