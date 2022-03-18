import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './styles/style.css';

type ProjectProps = {
  image: string;
  name: string;
  description: ReactNode;
  projectURL: string;
  githubURL: string;
};

const Project: React.FC<ProjectProps> = ({
  image,
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
        <img src={image} alt={name} className="project-image" />
      </a>
      <div className="project-info">
        <h1 className="project-name">{name}</h1>
        <p className="project-description">{description}</p>
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
  );
};

export default Project;
