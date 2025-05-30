import { useTaskStore } from "~/store/useTaskStore";
import { Fish, Rabbit, Dog } from "lucide-react";

export function ProgressBar() {
  const points = useTaskStore((state) => state.points);
  const percentage = Math.min(((points % 100) / 100) * 100, 100);

  let imageIcon = <Fish strokeWidth={1} size={50} className="text-slate-800" />;
  let label = "Novice";

  if (points >= 200) {
    imageIcon = <Dog strokeWidth={1} size={50} className="text-slate-800" />;
    label = "Guru";
  } else if (points >= 100) {
    imageIcon = <Rabbit strokeWidth={1} size={50} className="text-slate-800" />;
    label = "Pro";
  }

  return (
    <div className="flex flex-col bg-customGray  border-2 border-black rounded-lg shadow-primary max-w-xs md:max-w-sm mx-auto ">
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center gap-1 ">
          <span className="h-3 w-3 rounded-full bg-black"></span>
          <span className="h-3 w-3 rounded-full bg-black"></span>
          <span className="h-3 w-3 rounded-full bg-black"></span>
        </div>
        <span aria-live="polite" className="text-base font-semibold">
          Points: {points}
        </span>
      </div>

      <div>
        <div className="flex justify-center items-center gap-4 py-4 border-t-2 border-t-black">
          {imageIcon}

          <p
            className="text-xl uppercase font-semibold text-slate-800"
            role="status"
            aria-live="polite"
          >
            {label}
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 pb-12 px-6 min-w-40">
          <div
            role="progressbar"
            aria-label={`Progress toward next badge level. ${points % 100} out of 100 points earned.`}
            aria-valuenow={points % 100}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={`${points} out of ${100} points`}
            className="max-w-sm flex-1 bg-gray-400 rounded-full h-6 shadow-secondary"
          >
            <div
              className="bg-green-700 h-6 rounded-full shadow-secondary"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
