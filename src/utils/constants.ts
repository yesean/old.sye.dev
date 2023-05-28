// Navbar links
export const NAVBAR_LINKS = {
  home: "/",
  projects: "/projects",
  about: "/about",
  resume: "/resume.pdf",
}

const githubProfileURL = "https://github.com/yesean"

export const FOOTER_LINKS = {
  github: githubProfileURL,
  linkedin: "https://www.linkedin.com/in/yesean/",
  mail: "mailto:seanye24@gmail.com",
}

export const PROJECTS = [
  {
    name: "QBHub",
    projectURL: "https://qbhub.io",
    githubURL: `${githubProfileURL}/qbhub`,
    description: "A digital platform for studying and playing Quizbowl.",
  },
  {
    name: "pathmazer",
    projectURL: "https://pathmazer.com",
    githubURL: `${githubProfileURL}/pathmazer`,
    description:
      "A beautiful visualizer for pathfinding and maze generation algorithms.",
  },
  {
    name: "todo",
    projectURL: `${githubProfileURL}/todo`,
    githubURL: `${githubProfileURL}/todo`,
    description:
      "A clean, minimal todo list with user accounts designed for getting work done.",
  },
  {
    name: "generals.io bot",
    projectURL: "http://bot.generals.io/rankings/14",
    githubURL: `${githubProfileURL}/generalsio-bot`,
    description: [
      "A game bot for the fast paced, multiplayer game $link. Ranked number one in Season 14.",
      { name: "generals.io", href: "http://generals.io" },
    ],
  },
  {
    name: "dotfiles",
    projectURL: `${githubProfileURL}/dotfiles`,
    githubURL: `${githubProfileURL}/dotfiles`,
    description:
      "My config files for my Linux/macOS environment including neovim, zsh, tmux, etc.",
  },
]
