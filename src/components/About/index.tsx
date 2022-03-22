import * as React from "react"
import "./style.css"
import { StaticImage } from "gatsby-plugin-image"

const About: React.FC = () => {
  return (
    <div className="about-container">
      <StaticImage
        src="../../assets/me.jpg"
        alt="me"
        className="about-image"
        imgStyle={{
          borderRadius: "50%",
          width: "25ch",
        }}
      />
      <ul className="about-description">
        <li>incoming frontend engineer intern @ meta</li>
        <li>former sde intern @ amazon</li>
        <li>cs @ ucsd '23</li>
        <li>obsessed w/ web dev, open source, neovim, arch linux, coffee</li>
        <li>unix philosophy enthusiast</li>
        <li>probably fiddling with neovim right now</li>
      </ul>
    </div>
  )
}

export default About
