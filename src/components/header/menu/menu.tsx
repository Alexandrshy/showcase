import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

import { Logo } from "../logo/logo"
import useSiteMetadata from "../../../hooks/use-site-metadata"

import style from "./menu.module.css"

type PropsType = {
  isMenuOpen: boolean
  onToggleMenu: () => void
}

export const Menu: React.FC<PropsType> = ({ isMenuOpen, onToggleMenu }) => {
  const { menu } = useSiteMetadata()

  return (
    <div className={classNames({ ["is-open"]: isMenuOpen })}>
      <div className={style.mask} onClick={onToggleMenu} />
      <nav className={style.nav} aria-labelledby="mainmenulabel">
        <Logo />
        <h4 id="mainmenulabel" className="visuallyhidden">
          Main menu
        </h4>
        <ul id="menu-list" className={style.list}>
          {menu.map(
            (
              { label, path }: { label: string; path: string },
              index: number
            ) => (
              <li key={`${label}-${index}`} className={style.item}>
                <Link
                  partiallyActive={true}
                  activeStyle={{ color: "var(--menu-link-color-active)" }}
                  to={path}
                  className={style.link}
                >
                  {label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  )
}
