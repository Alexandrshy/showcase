import React from "react"

import { THEME } from "../../constants"
import useDarkMode from "../../hooks/use-dark-mode"

import style from "./switch.module.css"

export const Switch: React.FC = () => {
  const [darkMode, prefersDarkMode] = useDarkMode()

  return (
    <div className={style.switch}>
      <label className={style.label} htmlFor="switcher">
        <input
          className={style.input}
          type="checkbox"
          id="switcher"
          checked={darkMode === THEME.DARK}
          onChange={() =>
            prefersDarkMode(darkMode === THEME.DARK ? THEME.LIGHT : THEME.DARK)
          }
        />
      </label>
    </div>
  )
}
