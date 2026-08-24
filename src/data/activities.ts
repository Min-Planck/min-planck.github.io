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
    title: "CoDiM: Contrastive Distillation into Generative Models for Scalable Dataset Distillation",
    category: "Publication",
    date: "2026",
    description: "Tác giả chính bài báo nộp hội thảo IEEE IRI 2026 (Information Reuse and Integration for Data Science), nghiên cứu về chưng cất tập dữ liệu (dataset distillation) kết hợp mô hình tạo sinh và học tương phản.",
    image: "/images/dd.png"
  },
  {
    title: "Giải nhì nghiên cứu khoa học cấp trường",
    category: "Award",
    date: "2025",
    description: "Giải nhì cuộc thi nghiên cứu khoa học cấp trường ĐHXDHN với đề xuất thuật toán Federated Learning mới.",
    image: "/images/nckh.png"
  },
  {
    title: "Applying Federated Learning For Encrypted Traffic Classification In Multi-domain Software Defined Network",
    category: "Publication",
    date: "2025",
    description: "Đồng tác giả bài báo trình bày tại FAIR 2025 (Hội nghị Quốc gia về Nghiên cứu cơ bản và ứng dụng Công nghệ thông tin), đề xuất giải pháp học liên kết trong mạng SDN đa miền.",
    link: "https://github.com/Min-Planck/FL-Encrypted-Traffic-MultiDomain-SDN",
    image: "/images/fair.png"
  },
  {
    title: "Giải nhất nghiên cứu khoa học cấp trường",
    category: "Award",
    date: "2024",
    description: "Giải nhất cuộc thi nghiên cứu khoa học cấp trường ĐHXDHN.",
  },
  {
    title: "Giải khuyến khích Olympic tin học sinh viên khối chuyên tin",
    category: "Award",
    date: "2024",
    description: "Giải khuyến khích Olympic Tin học Sinh viên Toàn quốc 2024 (Khối Chuyên tin).",
    image: "/images/olp.png"
  },
  {
    title: "ICPC Asia Pacific 2024",
    category: "Activity",
    date: "2024",
    description: "Giải khuyến khích vòng Miền Bắc; Đủ điều kiện tham gia vòng National và Regional.",
    image: "/images/icpc.png"
  }
];

