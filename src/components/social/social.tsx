import React from "react"
import classNames from "classnames"

import useSiteMetadata from "../../hooks/use-site-metadata"

import style from "./social.module.css"

export const Social: React.FC = () => {
  const { social } = useSiteMetadata()

  return (
    <ul className={classNames(style.list)}>
      {social.map(
        ({ label, path }: { label: string; path: string }, index: number) => (
          <li key={`${label}-${index}`} className={style.item}>
            <a
              href={path}
              className={style.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </li>
        )
      )}
    </ul>
  )
}
