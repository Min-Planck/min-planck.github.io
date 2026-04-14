import { activities } from "@/data/activities";
import { Award } from "lucide-react";
import ActivityTimelineItem from "@/components/ActivityTimelineItem";

export default function ActivitiesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-4 text-accent">
          <Award size={32} />
          <h1 className="text-4xl font-bold text-white">Hoạt động & Giải thưởng</h1>
        </div>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
      </div>

      <div className="flex flex-col">
        {activities.map((activity, idx) => (
          <ActivityTimelineItem key={idx} item={activity} />
        ))}
      </div>
    </div>
  );
}
