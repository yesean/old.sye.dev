import { Helmet } from "react-helmet"
import { useEffect, useState } from "react"
import "../index.css"
import Footer from "./Footer"
import Navbar from "./Navbar"

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
      <Helmet>
        <title>Hi, I'm Sean!</title>
        <link rel="canonical" href="https://seanye.me" />
      </Helmet>
      <Navbar page={page} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
