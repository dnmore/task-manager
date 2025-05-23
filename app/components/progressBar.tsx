type ProgressBarProps = {
  points: number;
  
};

export function ProgressBar({points} : ProgressBarProps) {

  const percentage = Math.min(((points % 100) / 100) * 100, 100)
  const level = 
  points < 100 ?
  "🐴 Taskie Novice"
  : points < 300
  ? "🦓 Taskie Pro"
  : "🦓 Taskie Guru"


  return (
    <div className="flex items-center justify-center gap-6 py-8 px-6">
      <div
        role="progressbar"
        aria-valuenow={points}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={`${points} out of ${100} points`}
        className="max-w-sm flex-1 bg-gray-400 rounded-full h-6 shadow-secondary"
      >
        <div
          className="bg-green-700 h-6 rounded-full shadow-secondary"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-base uppercase" role="status" aria-live="polite">
        {level}
      </p>
    </div>
  );
}
