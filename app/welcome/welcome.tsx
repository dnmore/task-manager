import { useState } from "react";
import { motion } from "motion/react";
import { useTaskStore } from "~/store/useTaskStore";
import { ProgressBar } from "~/components/progressBar";
import { PriorityFilter } from "~/components/priorityFilter";
import { AddTaskModal } from "~/components/addTaskModal";
import { TaskItem } from "~/components/taskItem";

export function Welcome() {
  const points = useTaskStore((state) => state.points);
  const tasks = useTaskStore((state) => state.tasks);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [filterPriority, setFilterPriority] = useState("all");

  const openTaskModal = () => setIsTaskModalOpen(true);
  const closeTaskModal = () => setIsTaskModalOpen(false);
  const selectPriority = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setFilterPriority(e.target.value);

  const selectedTasks =
    filterPriority === "all"
      ? tasks
      : tasks.filter((task) => task.priority === filterPriority);

  return (
    <main className="flex flex-col py-3 px-6 mb-5">
      <ProgressBar points={points} />

      <div className="my-3 px-6 flex flex-col items-center">
        <motion.button
          onClick={openTaskModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
          className="w-full font-sans_grotesque max-w-80 py-4 px-8  uppercase tracking-wider bg-indigo-300  border-2 border-slate-800  text-3xl font-extrabold shadow-primary"
        >
          Create Task
        </motion.button>
        <AddTaskModal isOpen={isTaskModalOpen} onClose={closeTaskModal} />
      </div>

      <PriorityFilter value={filterPriority} onSelect={selectPriority} />
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 gap-4">
        {selectedTasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </div>
    </main>
  );
}
