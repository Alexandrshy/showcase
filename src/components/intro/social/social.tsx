import React from "react"

import { Icon } from "../../icon/icon"

import { getIcon } from "../../../utils/get-icon"
import useSiteMetadata from "../../../hooks/use-site-metadata"

import style from "./social.module.css"

export const Social: React.FC = () => {
  const { social } = useSiteMetadata()

  return (
    <ul className={style.list}>
      {social.map(
        ({ label, path }: { label: string; path: string }, index: number) => (
          <li key={`${label}-${index}`} className={style.item}>
            <a href={path} className={style.link} target="_blank">
              <span className="visuallyhidden">{label}</span>
              <Icon name={label} icon={getIcon(label)}></Icon>
            </a>
          </li>
        )
      )}
    </ul>
  )
}
