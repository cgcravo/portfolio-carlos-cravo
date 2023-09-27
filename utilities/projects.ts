type Project ={
  src: string,
  title: string,
  skills: string[],
  summary: string,
  complete: boolean,
  href: string,
};

export const projects: Project[] = [
  { src: "/assets/Find-My-Bloco.svg",
    title: "Find My Bloco",
    skills: ["/assets/skills/react-native-logo-png.jpeg", "/assets/skills/TSlogo.svg", "/assets/skills/tailwind-logo.jpg","/assets/skills/GraphQL_Logo.png", "/assets/skills/mongodb-logo.png", "/assets/skills/next-logo.jpg", "/assets/skills/nodejs.svg"],
    summary: "Find My Bloco is a mobile geo application designed to help tourists find their favorite street parades (Blocos) in Brazil, during Carnival.",
    complete: true,
    href: "https://github.com/cgcravo/final-project-Carlos-Schuabb",
  },
  { src: "/assets/naometorra-logo.jpeg",
    title: "Nao Me Torra",
    skills: ["/assets/skills/react-1-logo.png", "/assets/skills/TSlogo.svg", "/assets/skills/tailwind-logo.jpg", "/assets/skills/next-logo.jpg"],
    summary: "Não Me Torra is a website built for a very unique coffee shop built as a news-stand. ",
    complete: false,
    href: "",
  },
  { src: "/assets/pacman.png",
    title: "Snake Man",
    skills: ["/assets/skills/react-1-logo.png", "/assets/skills/TSlogo.svg", "/assets/skills/styled-components-2.png", "/assets/skills/vite-logo.png"],
    summary: "A surprisingly fun game created mixing 2 of my favorite classic games, snake and pacman!",
    complete: false,
    href: "",
  },
  
]