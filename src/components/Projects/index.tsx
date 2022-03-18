import Project from "./Project"
import { PROJECTS } from "../../utils/constants"
import "./styles/style.css"

const Projects: React.FC = () => {
  return (
    <div className="projects">
      {PROJECTS.map(proj => (
        <Project
          key={proj.name}
          image={proj.image}
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
