import { useState } from "react";
import { useTaskStore } from "~/store/useTaskStore";
import { ProgressBar } from "~/components/progressBar";
import { PriorityFilter } from "~/components/priorityFilter";
import { AddTaskModal } from "~/components/addTaskModal";
import { TaskItem } from "~/components/taskItem";

export function Welcome() {
  const points = useTaskStore((state) => state.points);
  const tasks = useTaskStore((state) => state.tasks);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const openTaskModal = () => setIsTaskModalOpen(true);
  const closeTaskModal = () => setIsTaskModalOpen(false);
  return (
    <main className="flex flex-col py-3 px-6 mb-5">
      <ProgressBar points={points} />

      <div className="my-3 px-6 flex flex-col items-center">
        <button
          onClick={openTaskModal}
          className="w-full font-sans_grotesque max-w-80 py-4 px-8  uppercase tracking-wider bg-yellow-400 hover:bg-yellow-500 border-2 border-black text-black text-3xl font-extrabold shadow-primary"
        >
          Create Task
        </button>
        <AddTaskModal isOpen={isTaskModalOpen} onClose={closeTaskModal} />
      </div>

      <PriorityFilter />
      <div className="mt-2 flex flex-wrap px-6 gap-4">
        {tasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </div>
    </main>
  );
}
