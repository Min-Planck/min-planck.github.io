export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Research Assistant AI Agent",
    description: "Phát triển hệ thống multi-agent dựa trên Kilo CLI nhằm tinh gọn quy trình nghiên cứu. Giải pháp tập trung tự động hóa chuỗi tác vụ từ tra cứu tài liệu đến tạo mã nguồn, sử dụng hệ thống tệp cấu hình Markdown chuyên biệt để điều phối và hướng dẫn hành vi của các agent. Team gồm 2 thành viên, tôi đảm nhiệm phần lớn việc phát triển, người còn lại đóng vai trò như techlead",
    tech: ["Kilo CLI", "LLM", "Markdown"],
    github: "https://github.com/HieuHuyNguyenzz/AINI_Research_Assistant_Agent",
  },
  {
    title: "Dataset Distillation",
    description: "Nghiên cứu giải thuật mới cho bài toán Dataset Distillation, áp dụng hàm loss InfoNCE trong Contrastive Learning để tối ưu hóa dữ liệu chưng cất. Hiện thuật toán vừa được submit vào IEEE IRI với tên CoDiM: Contrastive Distillation into Generative Models for Scalable Dataset Distillation",
    tech: ["Python", "PyTorch"],
    image: "/images/dd.png"
  },  
  {
    title: "Federated Learning cho phân loại lưu lượng mã hóa",
    description: "Đồng tác giả nghiên cứu về ứng dụng Federated Learning cho phân loại lưu lượng mã hóa trong mạng điều khiển bằng phần mềm đa miền (SDN), công bố tại FAIR 2025. Đảm nhận việc phát triển mã nguồn và thực hiện các thí nghiệm đánh giá hiệu suất của các thuật toán.",
    tech: ["PyTorch", "Python", "Flower", "SDN"],
    github: "https://github.com/Min-Planck/FL-Encrypted-Traffic-MultiDomain-SDN",
    image: "/images/fair.png"
  },
  {
    title: "Khôi phục vùng ảnh hỏng (Image Inpainting)",
    description: "Xây dựng kiến trúc U-Net khôi phục vùng ảnh hỏng, tối ưu hóa chất lượng bằng hàm mục tiêu kết hợp SSIM và MSE.",
    tech: ["PyTorch", "Computer Vision", "U-Net", "SSIM"],
    github: "https://github.com/Min-Planck/Project-Image-Inpainting",
    image: "/images/image-inpainting.png"
  },
  {
    title: "Phát hiện rò rỉ nước",
    description: "Xây dựng giải pháp phát hiện rò rỉ nước sử dụng LSTM Autoencoders cho bài toán Anomaly Detection. Triển khai backend với FastAPI và frontend Angular. Tham gia giai đoạn 1 tạo bản demo với team 3 người, đảm nhiệm tìm hiểu và huấn luyện mô hình, thiết kế giao diện và một phần backend.",
    tech: ["Python", "FastAPI", "Angular", "Keras", "LSTM"],
    image: "/images/wl.png"
  }
];
