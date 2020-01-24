import React from "react"
import classNames from "classnames"

import { Icon } from "../icon/icon"

import { getIcon } from "../../utils/get-icon"
import useSiteMetadata from "../../hooks/use-site-metadata"

import style from "./social.module.css"

type PropsType = {
  isCenter?: boolean
}

export const Social: React.FC<PropsType> = ({ isCenter }) => {
  const { social } = useSiteMetadata()

  return (
    <ul className={classNames(style.list, { [style.center]: isCenter })}>
      {social.map(
        ({ label, path }: { label: string; path: string }, index: number) => (
          <li key={`${label}-${index}`} className={style.item}>
            <a href={path} className={style.link} target="_blank">
              <span className="visuallyhidden">{label}</span>
              <Icon name={label} icon={getIcon(label)} />
            </a>
          </li>
        )
      )}
    </ul>
  )
}
