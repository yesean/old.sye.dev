import Footer from "./Footer"
import Navbar from "./Navbar"
import "../index.css"

type LayoutProp = {
  page: "/" | "/projects" | "/about"
}

const Layout: React.FC<LayoutProp> = ({ children, page }) => {
  if (typeof window === "undefined") return null

  return (
    <div className="app" style={{ height: window.innerHeight }}>
      <Navbar page={page} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
