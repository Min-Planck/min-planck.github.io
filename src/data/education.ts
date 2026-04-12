export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  details: string[];
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Hanoi University of Civil Engineering (HUCE)",
    period: "2022 - 2026 (Expected)",
    gpa: "3.68/4.0",
    details: [
      "Focus on Artificial Intelligence and Machine Learning",
      "Research in Federated Learning and Network Security"
    ]
  }
];
