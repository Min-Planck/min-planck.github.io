export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Fresher AI Engineer",
    company: "VNTravel Group",
    period: "05/2026 – 08/2026",
    details: [
      "Tích hợp LLM API để vận hành hệ thống chatbot tự động xử lý tin nhắn hỗ trợ khách hàng trên ứng dụng chat.",
      "Xây dựng pipeline xử lý tác vụ bất đồng bộ với Redis & BullMQ để quản lý hàng đợi tin nhắn trả lời tự động.",
      "Phát triển các API backend (NestJS) và giao diện frontend (NextJS) cho tính năng AI.",
      "Công nghệ & Công cụ: NextJS, NestJS, Redis, BullMQ."
    ]
  },
  {
    role: "Trợ lý nghiên cứu",
    company: "Bộ môn Khoa học máy tính - Khoa Công nghệ thông tin - (HUCE)",
    period: "11/2024 - Nay",
    details: [
      "Đọc và tổng hợp các tài liệu liên quan đến đề tài nghiên cứu: Federated Learning, Dataset Distillation...",
      "Cộng tác trong các dự án nghiên cứu và thực tế liên quan đến Trí tuệ nhân tạo (AI) và Học máy (ML).",
      "Hỗ trợ phát triển mã nguồn và kiểm thử các thuật toán Federated Learning.",
      "Tham gia viết các bài báo khoa học."
    ]
  }
];

