import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

import style from "./menu.module.css"

import { isActiveLink } from "../../../utils/active-link"
import useSiteMetadata from "../../../hooks/use-site-metadata"

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
                <Link getProps={isActiveLink} to={path} className={style.link}>
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
