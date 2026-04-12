export interface Activity {
  title: string;
  category: "Publication" | "Award" | "Activity";
  date: string;
  description: string;
  link?: string;
}

export const activities: Activity[] = [
  {
    title: "Applying Federated Learning For Encrypted Traffic Classification In Multi-domain Software Defined Network",
    category: "Publication",
    date: "2025",
    description: "Co-authored paper presented at FAIR 2025, focusing on privacy-preserving traffic classification using FL.",
    link: "#"
  },
  {
    title: "Giải nhất nghiên cứu khoa học cấp trường",
    category: "Award",
    date: "2024",
    description: "First prize in university-level scientific research competition.",
  },
  {
    title: "Giải nhì nghiên cứu khoa học cấp trường",
    category: "Award",
    date: "2025",
    description: "Second prize in university-level scientific research competition.",
  },
  {
    title: "Giải khuyến khích nghiên cứu khoa học khối chuyên tin",
    category: "Award",
    date: "2024",
    description: "Consolation prize in scientific research for specialized informatics students.",
  },
  {
    title: "ICPC Asia Pacific Northern Round 2024",
    category: "Activity",
    date: "2024",
    description: "Consolation Prize; Qualified for National and Regional rounds.",
  }
];
