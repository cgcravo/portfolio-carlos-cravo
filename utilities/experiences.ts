export type Experience = {
  image: string;
  title: string;
  company: string;
  tech?: string[];
  dateStart: string;
  dateEnd: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    image: "/assets/aim solder.jpeg",
    title: "Technical Application Specialist ",
    company: "American Iron and Metal Solder",
    tech: [],
    dateStart: "2022",
    dateEnd: "2023",
    points: ["Trained the National Sales Manager in SMT Technology", "Advised the modernization of the Technical Application Laboratory to meet the most demanding industry standards","Collaborated with the R&D department to design 3 new products for the electronic industry"],
  },
  {
    image: "/assets/aim solder.jpeg",
    title: "R&D Technician",
    company: "American Iron and Metal Solder",
    tech: [],
    dateStart: "2021",
    dateEnd: "2022",
    points: ["Modernized outdated procedures to ensure compliance with industry's standards", "Trained other technicians in the practices of the role"],
  },

] 