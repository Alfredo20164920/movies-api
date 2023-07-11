import { FC, ReactNode } from "react"
import { Navbar } from "../ui"

interface Props {
    children: ReactNode
    title?: string
}

export const MainLayout: FC<Props> = ({children, title}) => {
  return (
    <>
      {/* NAV */}
      <Navbar />
      {/* MAIN CONTENT */}
      <main className="px-16 py-10">
        {children}
      </main>
    </>
  )
}
