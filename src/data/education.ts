export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  details: string[];
}

export const education: EducationItem[] = [
  {
    degree: "Cử nhân Khoa học Máy tính",
    institution: "Trường Đại học Xây dựng Hà Nội (HUCE)",
    period: "2022 - 2026",
    gpa: "3.68/4.0",
    details: [
      "Chuyên sâu về Trí tuệ nhân tạo và Học máy",
      "Tham gia các cuộc thi lập trình thi đấu", 
      "Tham gia nghiên cứu khoa học về Federated Learning và Dataset Distillation",
      "Tham gia các dự án nghiên cứu và phát triển phần mềm liên quan đến AI"
    ]
  }
];
