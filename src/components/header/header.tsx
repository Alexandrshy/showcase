import React, { useState } from "react"

import { Menu } from "./menu/menu"
import { Hamburger } from "./hamburger/hamburger"

import style from "./header.module.css"

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={style.header}>
      <Hamburger
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      <Menu
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
    </header>
  )
}
