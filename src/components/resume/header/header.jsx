import React from "react"

import useSiteMetadata from "../../../hooks/use-site-metadata"

import style from "./header.module.css"

export const Header = () => {
  const { author } = useSiteMetadata()

  return (
    <div className={style.header}>
      <div className={style.titleBox}>
        <h1 className={style.title}>
          {author.name} {author.surname}
        </h1>
        <h2 className={style.subtitle}>Frontend developer</h2>
      </div>
      <div className={style.desc}>
        <p>
          I'm a Frontend developer. And I really love it! Every day I try to
          improve my skills and do interesting things. I'm currently working at{" "}
          <a
            href="http://www.optimaxeyewear.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Optimax Eyewear
          </a>{" "}
          on the{" "}
          <a
            href="https://www.glassesusa.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GlassesUSA
          </a>{" "}
          project as part of the Analytics team. I'm implementing new features,
          writing my own solutions and supporting code. My main technology stack
          React, Redux, Redux-Saga, Jest.
        </p>
      </div>
    </div>
  )
}
