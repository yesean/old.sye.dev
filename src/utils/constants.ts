// Navbar links
export const NAVBAR_LINKS = {
  home: "/",
  projects: "/projects",
  about: "/about",
}

const githubProfileURL = "https://github.com/yesean"

export const FOOTER_LINKS = {
  github: githubProfileURL,
  linkedin: "https://www.linkedin.com/in/yesean/",
  mail: "mailto:seanye24@gmail.com",
}

export const PROJECTS = [
  {
    imageSrc: "../../assets/pathmaze-visualizer.png",
    name: "pathmazer",
    projectURL: "https://pathmazer.com",
    githubURL: `${githubProfileURL}/pathmazer`,
    description:
      "A beautiful visualizer for pathfinding and maze generation algorithms.",
  },
  {
    imageSrc: "../../assets/minimal-todolist.png",
    name: "todo",
    projectURL: "https://minimaltodos.com",
    githubURL: `${githubProfileURL}/todo`,
    description:
      "A clean, minimal todo list with user accounts designed for getting work done.",
  },
  {
    imageSrc: "../../assets/generalsio-bot.png",
    name: "generals.io bot",
    projectURL: "http://bot.generals.io/rankings/14",
    githubURL: `${githubProfileURL}/generalsio-bot`,
    description: [
      "A game bot for the fast paced, multiplayer game $link. Ranked number one in Season 14.",
      { name: "generals.io", href: "http://generals.io" },
    ],
  },
  {
    imageSrc: "../../assets/dotfiles.png",
    name: "dotfiles",
    projectURL: `${githubProfileURL}/dotfiles`,
    githubURL: `${githubProfileURL}/dotfiles`,
    description:
      "My config files for my Linux/macOS environment including neovim, zsh, tmux, etc.",
  },
]
