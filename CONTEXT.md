# Project Context

## 1. Tổng quan (Overview)
- **Tên dự án:** Portfolio cá nhân của Hoàng Quang Duy
- **Mục đích:** Xây dựng trang web tĩnh để giới thiệu thông tin cá nhân, quá trình học tập, kỹ năng AI/ML và các dự án nghiên cứu.
- **Trạng thái:** Đang khởi tạo

## 2. Thông tin cá nhân (Personal Context)
*Dữ liệu này được sử dụng để AI tự động điền nội dung vào các trang giới thiệu và dự án.*
- **Tên đầy đủ:** Hoàng Quang Duy
- **Học vấn:** Cử nhân Khoa học Máy tính, trường Đại học Xây dựng Hà Nội (HUCE) - Tốt nghiệp đầu năm 2026, GPA: 3.68/4.0.
- **Lĩnh vực chuyên môn & Nghiên cứu:** - Artificial Intelligence, Machine Learning.
  - Federated Learning, Dataset Distillation, Contrastive Learning.
  - Agentic Workflows (Dify, Kilo CLI, OpenCode). 

- **Thành tựu nổi bật:** Đồng tác giả bài báo "Applying Federated Learning For Encrypted Traffic Classification In Multi-domain Software Defined Network" (FAIR 2025). Giải nhất nghiên cứu khoa học cấp trường (2024), Giải nhì nghiên cứu khoa học cấp trường (2025), Giải khuyến khích nghiên cứu khoa học khối chuyên tin (2024), ICPC Asia Pacific Northern Round 2024: Consolation Prize; Qualified for National and Regional rounds. 
- **Các dự án**: 
    - Research Assistant AI Agent (Ongoing): Phát triển hệ thống multi-agents nhằm tinh giản quy trình nghiên cứu khoa
học, tập trung vào việc tự động hóa quản lý tác vụ và điều phối framework.
    - Water Leak Detection (Proof of Concept): Xây dựng giải pháp phát hiện rò rỉ nước sử dụng LSTM Autoencoders cho
bài toán Anomaly Detection. Triển khai backend với FastAPI và frontend Angular.
    - Công bố khoa học (FAIR 2025): Đồng tác giả bài báo: ”Applying Federated Learning For Encrypted Traffic
Classification In Multi-domain Software Defined Network”.
    - Image Inpainting: Xây dựng kiến trúc U-Net khôi phục vùng ảnh hỏng, tối ưu hóa chất lượng bằng hàm mục tiêu kết
hợp SSIM và MSE
- **Sở thích cá nhân (dùng cho trang About):** Nhạc J-Pop, Thần thoại cổ đại của các nước trên thế giới, Cổ sinh vật học.

## 3 Tech Stack
- **Framework:** Next.js (App Router) với tính năng Static HTML Export (`output: 'export'`).
- **Ngôn ngữ:** TypeScript.
- **Styling:** Tailwind CSS.
- **Icon:** Lucide React.
- **Deploy:** GitHub Pages thông qua GitHub Actions (nhánh `gh-pages`).

## 4. Cấu trúc thư mục chính (Directory Structure)
```text
/
├── .github/workflows/deploy.yml # Script CI/CD
├── public/                      # Hình ảnh, file tĩnh, CV (resume.pdf)
├── src/
│   ├── app/                     # Routing (/, /about, /projects, /activities)
│   ├── components/              # UI Components (Navbar, Footer, ProjectCard, TimelineItem)
│   └── data/                    # Dữ liệu tĩnh tách biệt khỏi UI
│       ├── info.ts              # Chứa thông tin cơ bản
│       ├── education.ts         # Quá trình học tập (HUCE)
│       ├── projects.ts          # Các dự án (Research Assistant AI Agent, v.v.)
│       └── activities.ts        # Bài báo FAIR 2025, giải thưởng
└── next.config.js               # Cấu hình xuất file tĩnh