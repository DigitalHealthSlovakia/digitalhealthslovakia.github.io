export interface TeamMember {
  name: string;
  img: string;
  titleEn: string;
  titleSk: string;
}

export const team: TeamMember[] = [
  { name: "Eva Sabajová", img: "/images/Tim_ESa.png", titleEn: "President", titleSk: "Prezidentka" },
  { name: "Michal Juhás", img: "/images/Tim_MJu.png", titleEn: "Vice-President", titleSk: "Viceprezident" },
  { name: "Jozef Kalužay", img: "/images/Tim_JKa.jfif", titleEn: "Executive Council", titleSk: "Člen prezídia" },
  { name: "Jakub Jamnický", img: "/images/Tim_JJa.png", titleEn: "Technical Chair", titleSk: "Predseda technickej komisie" },
  { name: "Dmitry Etin", img: "/images/Tim_DEt.png", titleEn: "Technical Advisor", titleSk: "Technický poradca" },
];