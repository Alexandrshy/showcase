import React, { ReactNode } from "react"

type PropsType = {
  children: ReactNode
}

export const Page: React.FC<PropsType> = ({ children }) => (
  <>
    <div>{children}</div>
  </>
)
