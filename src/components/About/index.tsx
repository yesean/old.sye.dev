import * as React from "react"
import "./styles/style.css"
import { StaticImage } from "gatsby-plugin-image"

const About: React.FC = () => {
  return (
    <div className="about-container">
      <StaticImage src="../../assets/me.jpg" alt="me" className="about-image" />
      <ul className="about-description">
        <li>former sde intern @ amazon</li>
        <li>3rd year cs @ ucsd</li>
        <li>obsessed w/ web dev, open source, neovim, arch linux, coffee</li>
        <li>minimalist, unix philosophy enthusiast</li>
        <li>probably fiddling with neovim right now</li>
      </ul>
    </div>
  )
}

export default About
