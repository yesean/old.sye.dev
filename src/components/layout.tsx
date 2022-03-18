import Footer from "./Footer"
import Navbar from "./Navbar"
import "../index.css"
import { useEffect, useState } from "react"

type LayoutProp = {
  page: "/" | "/projects" | "/about"
}

const Layout: React.FC<LayoutProp> = ({ children, page }) => {
  if (typeof window === "undefined") return null
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="app" style={{ height }}>
      <Navbar page={page} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
