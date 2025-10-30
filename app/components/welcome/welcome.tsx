import { useState, useEffect } from "react";
import { useTaskStore } from "~/store/useTaskStore";
import { ProgressBar } from "~/components/progressBar/progressBar";
import { PriorityFilter } from "~/components/priorityFilter/priorityFilter";
import { TaskItem } from "../taskItem/taskItem";
import { Loader } from "lucide-react";
import { FormattedMessage } from "react-intl";

export function Welcome() {
  const { tasks, loading, fetchTasks } = useTaskStore();
  const [filterPriority, setFilterPriority] = useState("all");

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const selectPriority = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setFilterPriority(e.target.value);

  const selectedTasks =
    filterPriority === "all"
      ? tasks
      : tasks.filter((task) => task.priority === filterPriority);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="h-4/5 bg-customGreen pb-6">
        <ProgressBar />
      </div>

      <PriorityFilter value={filterPriority} onSelect={selectPriority} />
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 pb-4 gap-4">
        {loading ? (
          <div className="col-span-full text-center text-lg font-sans_grotesque py-4">
            <Loader size={36} className="mx-auto animate-spin" />
          </div>
        ) : selectedTasks.length > 0 ? (
          selectedTasks.map((task) => <TaskItem task={task} key={task.id} />)
        ) : (
          <div className="col-span-full text-center text-lg font-sans_grotesque py-4">
            <p>
              <FormattedMessage id="app.emptyState" />
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
