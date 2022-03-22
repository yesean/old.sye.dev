import Project from "./Project"
import { PROJECTS } from "../../utils/constants"
import "./style.css"

const Projects: React.FC = () => {
  return (
    <div className="projects">
      {PROJECTS.map(proj => (
        <Project
          key={proj.name}
          imageSrc={proj.imageSrc}
          name={proj.name}
          description={proj.description}
          projectURL={proj.projectURL}
          githubURL={proj.githubURL}
        />
      ))}
    </div>
  )
}

export default Projects
