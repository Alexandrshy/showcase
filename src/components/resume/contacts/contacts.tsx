import React from "react"

import { Title } from "../title/title"

import useSiteMetadata from "../../../hooks/use-site-metadata"

import style from "./contacts.module.css"

export const Contacts: React.FC = () => {
  const { author, url, github } = useSiteMetadata()
  const CONTACTS = [
    {
      link: `mailto: ${author.contacts.email}`,
      title: "Email",
      value: author.contacts.email,
    },
    {
      link: author.contacts.skype.url,
      title: "Skype",
      value: author.contacts.skype.name,
    },
    {
      link: `https://t.me/${author.contacts.telegram}`,
      title: "Telegram",
      value: author.contacts.telegram,
    },
    {
      link: url,
      title: "Personal page",
      value: "alexandrshy.com",
    },
    {
      link: `https://github.com/${github.name}/${github.repo}`,
      title: "GitHub",
      value: github.name,
    },
    {
      link: `https://www.linkedin.com/in/${author.contacts.linkedin}`,
      title: "LinkedIn",
      value: author.contacts.linkedin,
    },
  ]

  return (
    <div className={style.contacts}>
      <Title>Contacts</Title>
      <dl className={style.wrapper}>
        {CONTACTS.map(({ link, title, value }, index) => (
          <div key={index} className={style.item}>
            <dt>{title}:</dt>
            <dd>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                {value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
