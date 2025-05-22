import { ProgressBar } from "~/components/progressBar";
import { PriorityFilter } from "~/components/priorityFilter";

export function Welcome() {
  return (
    <main className="flex flex-col py-3 px-6 mb-5">
      <ProgressBar points={50} />

      <div className="my-3 px-6 flex flex-col items-center">
        <button className="w-full font-sans_grotesque max-w-80 py-4 px-8  uppercase tracking-wider bg-yellow-400 hover:bg-yellow-500 border-2 border-black text-black text-3xl font-extrabold shadow-primary">
          Create Task
        </button>
      </div>

      <PriorityFilter />
    </main>
  );
}
