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
        <li>prev @ meta, amazon</li>
        <li>cs @ ucsd '23</li>
        <li>obsessed w/ software, customizing neovim, and ethiopian coffee</li>
        <li>unix philosophy enthusiast</li>
      </ul>
    </div>
  )
}

export default About
