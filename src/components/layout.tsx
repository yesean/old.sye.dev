import Footer from "./Footer"
import Navbar from "./Navbar"
import "../index.css"

type LayoutProp = {
  page: "/" | "/projects" | "/about"
}

const Layout: React.FC<LayoutProp> = ({ children, page }) => {
  return (
    <div className="app">
      <Navbar page={page} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
