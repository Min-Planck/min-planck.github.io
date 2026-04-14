export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Trợ lý nghiên cứu",
    company: "Bộ môn Khoa học máy tính - Khoa Công nghệ thông tin - (HUCE)",
    period: "11/2024 - 01/2025",
    details: [
      "Đọc và tổng hợp các tài liệu liên quan đến đề tài nghiên cứu: Federated Learning, Dataset Distillation...",
      "Cộng tác trong các dự án nghiên cứu và thực tế liên quan đến Trí tuệ nhân tạo (AI) và Học máy (ML).",
      "Hỗ trợ phát triển mã nguồn và kiểm thử các thuật toán Federated Learning.",
      "Tham gia viết các bài báo khoa học."
    ]
  }
];
