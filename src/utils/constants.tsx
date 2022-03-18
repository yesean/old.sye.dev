import {
  pathmazeVisualizer,
  minimalTodoList,
  generalsioBot,
  dotfiles,
} from "../assets"

// Navbar links
export const NAVBAR_LINKS = {
  home: "/",
  projects: "/projects",
  about: "/about",
}

const githubURL = "https://github.com/yesean"

export const FOOTER_LINKS = {
  github: githubURL,
  linkedin: "https://www.linkedin.com/in/yesean/",
  mail: "mailto:seanye24@gmail.com",
}

export const PROJECTS = [
  {
    image: pathmazeVisualizer,
    name: "pathmazer",
    description:
      "A beautiful visualizer for pathfinding and maze generation algorithms.",
    projectURL: "https://pathmazer.com",
    githubURL: `${githubURL}/pathmazer`,
  },
  {
    image: minimalTodoList,
    name: "todo",
    description:
      "A clean, minimal todo list with user accounts designed for getting work done.",
    projectURL: "https://minimaltodos.com",
    githubURL: `${githubURL}/todo`,
  },
  {
    image: generalsioBot,
    name: "generals.io bot",
    description: (
      <>
        A game bot for the fast paced, multiplayer game{" "}
        <a
          href="http://generals.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-text-link"
        >
          generals.io
        </a>
        . Ranked number one in Season 14.
      </>
    ),
    projectURL: "http://bot.generals.io/rankings/14",
    githubURL: `${githubURL}/generalsio-bot`,
  },
  {
    image: dotfiles,
    name: "dotfiles",
    description:
      "my dotfiles for various programs including vim, zsh, tmux, etc",
    projectURL: `${githubURL}/dotfiles`,
    githubURL: `${githubURL}/dotfiles`,
  },
]
