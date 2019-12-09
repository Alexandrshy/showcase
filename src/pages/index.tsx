import React from "react"
import { Link } from "gatsby"

import { Header } from "../components/header/header"

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  )
}

export default Main
