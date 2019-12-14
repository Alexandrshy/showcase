import React from "react"
import classNames from "classnames"

import style from "./hamburger.module.css"

type PropsType = {
  isMenuOpen: boolean
  onToggleMenu: () => void
}

export const Hamburger: React.FC<PropsType> = ({
  onToggleMenu,
  isMenuOpen,
}) => {
  return (
    <button
      className={classNames({ ["is-open"]: isMenuOpen }, style.button)}
      onClick={onToggleMenu}
      aria-label="Open the menu"
      aria-controls="menu-list"
    >
      <span className={style.line} aria-hidden="true" />
      <span className={style.line} aria-hidden="true" />
      <span className={style.line} aria-hidden="true" />
    </button>
  )
}
