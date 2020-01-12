import React from "react"

import { THEME } from "../../constants"
import useDarkMode from "../../hooks/use-dark-mode"

import style from "./switch.module.css"

export const Switch: React.FC = () => {
  const [darkMode, prefersDarkMode] = useDarkMode()

  return (
    <div className={style.wrapper}>
      <input
        className={style.input}
        type="checkbox"
        id="switcher"
        role="switch"
        checked={darkMode === THEME.DARK}
        onChange={() =>
          prefersDarkMode(darkMode === THEME.DARK ? THEME.LIGHT : THEME.DARK)
        }
      />
      <label className={style.label} htmlFor="switcher" />
    </div>
  )
}
