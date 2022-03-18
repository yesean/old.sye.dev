import { useState, useEffect } from "react"
import "./styles/style.css"
import { NAVBAR_LINKS } from "../../utils/constants"
import { Link } from "gatsby"

const defaultNavbarItems = [
  { name: "home", href: NAVBAR_LINKS.home, className: "navbar-link" },
  {
    name: "projects",
    href: NAVBAR_LINKS.projects,
    className: "navbar-link",
  },
  { name: "about", href: NAVBAR_LINKS.about, className: "navbar-link" },
]

type NavbarProps = {
  page: "/" | "/projects" | "/about"
}

const Navbar: React.FC<NavbarProps> = ({ page }) => {
  const [navbarItems, setNavbarItems] = useState(defaultNavbarItems)

  useEffect(() => {
    setNavbarItems(
      defaultNavbarItems.map(item => ({
        ...item,
        className: item.href === page ? "navbar-link active" : "navbar-link",
      }))
    )
  }, [])

  return (
    <nav className="navbar">
      {navbarItems.map(({ name, href, className }) => (
        <Link key={name} to={href} className={className}>
          {name}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
