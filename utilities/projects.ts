type Project ={
  src: string,
  title: string,
  skills: string[],
  summary: string,
  complete: boolean,
};

export const projects: Project[] = [
  { src: "/assets/Screenshot 2023-07-18 115249.jpg",
    title: "Find My Bloco",
    skills: ["/assets/skills/react-native-logo-png.jpeg", "/assets/skills/TSlogo.svg", "/assets/skills/tailwind-logo.jpg","/assets/skills/GraphQL_Logo.png", "/assets/skills/mongodb-logo.png", "/assets/skills/next-logojpg", "/assets/skills/node-logo.png"],
    summary: "Find My Bloco is a mobile geo application designed to help tourists find their favorite street parades (Blocos) in Brazil, during Carnival.",
    complete: true,
  },
  { src: "/assets/naometorra-logo.jpeg",
    title: "Nao Me Torra Coffee Shop",
    skills: ["/assets/skills/react-1-logo.png", "/assets/skills/TSlogo.svg", "/assets/skills/tailwind-logo.jpg", "/assets/skills/next-logojpg"],
    summary: "Não Me Torra is a website built for a very unique coffee shop built as a news-stand. ",
    complete: false,
  },
  { src: "/assets/pacman.png",
    title: "Snake Man",
    skills: ["/assets/skills/react-1-logo.png", "/assets/skills/TSlogo.svg", "/assets/skills/styled-components-logo.png", "/assets/skills/vite-logo.png"],
    summary: "It is just another snake ga... why is the food running away from me??? Discover this surprisingly fun game created mixing 2 of my favorite classic games, snake and pacman!",
    complete: false,
  },
  
]