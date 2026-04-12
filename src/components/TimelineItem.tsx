import React from "react";
import { EducationItem } from "@/data/education";

interface TimelineItemProps {
  item: EducationItem;
}

export default function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Line */}
      <div className="absolute left-0 top-0 h-full w-px bg-white/10 last:h-0" />
      
      {/* Dot */}
      <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_#3b82f6]" />
      
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-lg font-bold text-white">{item.degree}</h4>
          <span className="text-xs font-medium text-gray-500">{item.period}</span>
        </div>
        <p className="text-sm font-medium text-accent">{item.institution}</p>
        {item.gpa && (
          <p className="text-xs text-gray-400">GPA: {item.gpa}</p>
        )}
        <ul className="mt-2 list-disc list-inside text-sm text-gray-400 space-y-1">
          {item.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
