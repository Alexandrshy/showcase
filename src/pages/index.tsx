import React from "react"
import { Link } from "gatsby"

import { Header } from "../components/header/header"

const Main: React.FC = props => {
  return (
    <>
      <Header />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
          {props.title}
        </li>
      </ul>
    </>
  )
}

export default Main
