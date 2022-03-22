import { ReactNode } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import "./style.css"
import { StaticImage } from "gatsby-plugin-image"

type ProjectLink = { name: string; href: string }
type Description = string | (string | ProjectLink)[]

const renderLink = (link: ProjectLink) => (
  <a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    className="project-text-link"
  >
    {link.name}
  </a>
)

const parseDescription = (desc: Description) => {
  if (typeof desc === "string" || desc.length === 0) return desc

  // check if enough links are provided
  const texts = (desc[0] as string).split("$link")
  const links = desc.slice(1) as ProjectLink[]
  const numberOfExpectedLinks = texts.length - 1
  const numberOfActualLinks = desc.length - 1
  if (numberOfExpectedLinks < numberOfActualLinks)
    throw new Error(
      `Expected ${numberOfExpectedLinks} links. Only ${numberOfActualLinks} links provided.`
    )

  const renderedDesc = new Array(numberOfExpectedLinks)
    .fill(null)
    .reduce<(JSX.Element | string)[]>(
      (acc, _, i) => acc.concat(texts[i], renderLink(links[i])),
      []
    )
  return renderedDesc.concat(texts[texts.length - 1])
}

type ProjectProps = {
  imageSrc: string
  name: string
  description: Description
  projectURL: string
  githubURL: string
}

type ProjectName = "pathmazer" | "todo" | "generals.io bot" | "dotfiles"
const renderImage = (name: ProjectName) => {
  const imgStyle = {
    objectFit: "scale-down",
    borderRadius: "5px 5px 0 0",
  } as React.CSSProperties
  if (name === "pathmazer") {
    return (
      <StaticImage
        src="../../assets/pathmazer.png"
        alt={name}
        imgStyle={imgStyle}
      />
    )
  } else if (name === "todo") {
    return (
      <StaticImage src="../../assets/todo.png" alt={name} imgStyle={imgStyle} />
    )
  } else if (name === "generals.io bot") {
    return (
      <StaticImage
        src="../../assets/generals.png"
        alt={name}
        imgStyle={imgStyle}
      />
    )
  } else if (name === "dotfiles") {
    return (
      <StaticImage
        src="../../assets/dotfiles.png"
        alt={name}
        imgStyle={imgStyle}
      />
    )
  }
}

const Project: React.FC<ProjectProps> = ({
  imageSrc,
  name,
  description,
  projectURL,
  githubURL,
}) => {
  return (
    <div className="project-card">
      <a
        href={projectURL}
        target="_blank"
        rel="noopener noreferrer"
        className="project-image-container"
      >
        {renderImage(name as ProjectName)}
      </a>
      <div className="project-info">
        <h1 className="project-name">{name}</h1>
        <p className="project-description">{parseDescription(description)}</p>
        <div className="project-links">
          <a href={projectURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} className="project-icon-link" />
          </a>
          <a href={githubURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="project-icon-link" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
