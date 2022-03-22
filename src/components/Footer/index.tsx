import * as React from "react"
import "./style.css"
import { FOOTER_LINKS } from "../../utils/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const footerItems = [
  {
    name: "LinkedIn",
    href: FOOTER_LINKS.linkedin,
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
  },
  {
    name: "GitHub",
    href: FOOTER_LINKS.github,
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    name: "Mail",
    href: FOOTER_LINKS.mail,
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {footerItems.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link"
        >
          {icon}
        </a>
      ))}
    </footer>
  )
}

export default Footer
