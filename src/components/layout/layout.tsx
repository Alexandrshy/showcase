import React, { ReactNode } from "react"
import Helmet from "react-helmet"
import Loadable from "@loadable/component"

import { Header } from "../../components/header/header"
import { Footer } from "../../components/footer/footer"
// import { Switch } from "../../components/switch/switch"
const Switch = Loadable(() => import("../../components/switch/switch"))

import useSiteMetadata from "../../hooks/use-site-metadata"

import style from "./layout.module.css"

type PropsType = {
  children: ReactNode
  title?: string
  description?: string
  image?: string
}

export const Layout: React.FC<PropsType> = ({
  children,
  title,
  description,
  image,
}) => {
  const isSSR = typeof window === "undefined"
  const {
    title: configTitle,
    description: configDescription,
    image: imageDescription,
  } = useSiteMetadata()
  const customDescription = description || configDescription
  const customTitle = title || configTitle
  const customImage = image || imageDescription

  return (
    <div className={style.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={customDescription} />
        <meta property="og:site_name" content={customTitle} />
        <meta property="og:image" content={customImage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={customTitle} />
        <meta name="twitter:description" content={customDescription} />
        <meta name="twitter:image" content={customImage} />
      </Helmet>
      <Header />
      {!isSSR && (
        <React.Suspense fallback={<div>123123</div>}>
          <Switch />
        </React.Suspense>
      )}
      <main>{children}</main>
      <Footer />
    </div>
  )
}
