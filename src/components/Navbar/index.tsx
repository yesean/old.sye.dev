import { useState, useEffect } from "react"
import "./style.css"
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
  { name: "resume", href: NAVBAR_LINKS.resume, className: "navbar-link" },
]

type NavbarProps = {
  page: "/" | "/projects" | "/about"
}

const renderLink = ({
  name,
  href,
  className,
}: typeof defaultNavbarItems[0]) => {
  if (href.match(/\..*/))
    return (
      <a
        key={name}
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    )

  return (
    <Link key={name} to={href} className={className}>
      {name}
    </Link>
  )
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

  return <nav className="navbar">{navbarItems.map(renderLink)}</nav>
}

export default Navbar
