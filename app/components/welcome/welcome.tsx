import { useState } from "react";
import { useTaskStore } from "~/store/useTaskStore";
import { ProgressBar } from "~/components/progressBar/progressBar";
import { PriorityFilter } from "~/components/priorityFilter/priorityFilter";
import { TaskItem } from "../taskItem/taskItem";

export function Welcome() {
  const tasks = useTaskStore((state) => state.tasks);
  const [filterPriority, setFilterPriority] = useState("all");

  const selectPriority = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setFilterPriority(e.target.value);

  const selectedTasks =
    filterPriority === "all"
      ? tasks
      : tasks.filter((task) => task.priority === filterPriority);

  return (
    <main className="flex flex-col">
      <div className="h-4/5 bg-customGreen pb-6">
        <ProgressBar />
      </div>

      <PriorityFilter value={filterPriority} onSelect={selectPriority} />
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 pb-4 gap-4">
        {selectedTasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </div>
    </main>
  );
}
