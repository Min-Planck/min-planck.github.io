import { activities } from "@/data/activities";
import { Award, FileText, Calendar } from "lucide-react";

export default function ActivitiesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-4 text-accent">
          <Award size={32} />
          <h1 className="text-4xl font-bold text-white">Activities & Awards</h1>
        </div>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
      </div>

      <div className="space-y-6">
        {activities.map((activity, idx) => (
          <div 
            key={idx} 
            className="group relative rounded-2xl border border-white/10 bg-secondary p-6 transition-all hover:border-accent/50"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/20">
                    {activity.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar size={12} />
                    {activity.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
              {activity.link && (
                <a 
                  href={activity.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                >
                  <FileText size={14} />
                  View Detail
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
