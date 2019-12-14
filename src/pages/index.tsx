import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout/layout"
import { Intro } from "../components/intro/intro"

const Main: React.FC = () => {
  return (
    <Layout>
      <Intro />
    </Layout>
  )
}

export default Main
