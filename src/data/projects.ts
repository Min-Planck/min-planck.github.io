export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Research Assistant AI Agent",
    description: "Developed a multi-agent system to streamline the scientific research process, focusing on task management automation and framework orchestration.",
    tech: ["Python", "LangChain", "OpenAI", "Vector DB"],
    github: "https://github.com/duyhq/research-assistant",
    demo: "https://demo.research-assistant.ai"
  },
  {
    title: "Water Leak Detection",
    description: "Built a proof-of-concept solution for water leak detection using LSTM Autoencoders for anomaly detection. Implemented backend with FastAPI and frontend with Angular.",
    tech: ["Python", "FastAPI", "Angular", "Keras", "LSTM"],
    github: "https://github.com/duyhq/water-leak-detection"
  },
  {
    title: "Federated Learning for Encrypted Traffic Classification",
    description: "Co-authored research on applying Federated Learning for encrypted traffic classification in multi-domain Software Defined Networks (SDN), published at FAIR 2025.",
    tech: ["PyTorch", "Python", "SDN", "Cryptography"],
    github: "https://github.com/duyhq/fl-traffic-classification"
  },
  {
    title: "Image Inpainting",
    description: "Designed a U-Net architecture to restore corrupted image regions, optimizing quality through a combined objective function of SSIM and MSE.",
    tech: ["PyTorch", "Computer Vision", "U-Net", "SSIM"],
    github: "https://github.com/duyhq/image-inpainting"
  }
];
