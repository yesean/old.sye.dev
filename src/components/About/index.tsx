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
        <li>prev @ meta (fee), amazon (sde)</li>
        <li>cs @ ucsd '23</li>
        <li>obsessed w/ web dev, neovim, coffee, biang biang noodles</li>
        <li>unix philosophy enthusiast</li>
        <li>laker nation!</li>
      </ul>
    </div>
  )
}

export default About
