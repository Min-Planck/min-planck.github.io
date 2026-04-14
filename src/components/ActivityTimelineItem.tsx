import React from "react";
import Image from "next/image";
import { Activity } from "@/data/activities";
import { FileText } from "lucide-react";

interface ActivityTimelineItemProps {
  item: Activity;
}

export default function ActivityTimelineItem({ item }: ActivityTimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Line */}
      <div className="absolute left-0 top-0 h-full w-px bg-white/10 last:h-0" />
      
      {/* Dot */}
      <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_#3b82f6]" />
      
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-lg font-bold text-white">{item.title}</h4>
          <span className="text-xs font-medium text-gray-500">{item.date}</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/20">
            {item.category}
          </span>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          {item.description}
        </p>
        {item.image && (
          <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <Image 
              src={item.image} 
              alt={item.title} 
              width={600} 
              height={300} 
              className="h-auto w-full object-cover transition-transform hover:scale-105 duration-300"
            />
          </div>
        )}
        {item.link && (
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-1 text-xs font-medium text-accent hover:text-white transition-colors w-fit"
          >
            <FileText size={14} />
            Xem chi tiết
          </a>
        )}
      </div>
    </div>
  );
}
