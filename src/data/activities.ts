export interface Activity {
  title: string;
  category: "Publication" | "Award" | "Activity";
  date: string;
  description: string;
  link?: string;
  image?: string;
}

export const activities: Activity[] = [
  {
    title: "Giải nhì nghiên cứu khoa học cấp trường",
    category: "Award",
    date: "2025",
    description: "Giải nhì cuộc thi nghiên cứu khoa học cấp trường với đề xuất thuật toán Federated Learning mới.",
    image: "/images/nckh.png"
  },
  {
    title: "Applying Federated Learning For Encrypted Traffic Classification In Multi-domain Software Defined Network",
    category: "Publication",
    date: "2025",
    description: "Đồng tác giả bài báo trình bày tại FAIR 2025, bài báo đề xuất áp dụng FedProx vào bài toán phân loại lưu lượng mã hóa trong mạng SDN đa miền.",
    link: "https://github.com/Min-Planck/FL-Encrypted-Traffic-MultiDomain-SDN"
  },
  {
    title: "Giải nhất nghiên cứu khoa học cấp trường",
    category: "Award",
    date: "2024",
    description: "Giải nhất cuộc thi nghiên cứu khoa học cấp trường.",
  },
  {
    title: "Giải khuyến khích Olympic tin học sinh viên khối chuyên tin",
    category: "Award",
    date: "2024",
    description: "Giải khuyến khích Olympic tin học toàn quốc dành cho sinh viên khối công nghệ thông tin.",
    image: "/images/olp.png"
  },
  {
    title: "ICPC Asia Pacific 2024",
    category: "Activity",
    date: "2024",
    description: "Giải khuyến khích cuộc thi vòng miền Bắc; Tham gia vòng National và Regional.",
    image: "/images/icpc.png"
  }
];
