import { useState } from "react";
import { useTaskStore } from "~/store/useTaskStore";
import { motion } from "motion/react";
import type { Task } from "~/types/definition";
import { EditTaskModal } from "./editTaskModal";
import { Gem, Clock } from "lucide-react";

type TaskItemProps = {
  task: Task;
};

const variants = {
  visible: {
    opacity: 1,
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
  },
  hidden: { opacity: 0 },
};

export function TaskItem({ task }: TaskItemProps) {
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const toggleTask = useTaskStore((state) => state.toggleStatus);
  const [taskIdToUpdate, setTaskIdToUpdate] = useState("");
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const openUpdateModal = () => setIsUpdateModalOpen(true);
  const closeUpdateModal = () => setIsUpdateModalOpen(false);

  const handleEditTask = (task: Task) => {
    setTaskIdToUpdate(task.id);
    openUpdateModal();
  };

  return (
    <motion.div
      key={task.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col  gap-4 my-6 pb-6 px-4 bg-customGray border-2 border-slate-800 shadow-secondary rounded-lg"
    >
      <span className="max-w-20 text-xs rounded-sm uppercase text-center border-2 border-slate-800 -mt-4 relative bg-slate-800 text-white py-2">
        {task.priority}
      </span>
      <div className="mb-8">
        <p className="text-xl font-semibold font-sans_grotesque uppercase">
          {task.text}
        </p>

        <p className="flex items-center gap-2 mt-2 text-base"><Clock size={24} className="text-slate-800" /> {task.dueDate}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 place-items-end ">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleEditTask(task)}
            className="w-28 h-8 uppercase font-medium tracking-wider bg-customYellow border-2 border-slate-800 shadow-secondary skew-y-3 hover:scale-[1.02]"
          >
            Edit
          </button>
          <EditTaskModal
            taskIdToUpdate={taskIdToUpdate}
            isOpen={isUpdateModalOpen}
            onClose={closeUpdateModal}
          />
          <button
            onClick={() => deleteTask(task.id)}
            className="w-28 h-8  uppercase font-medium tracking-wider bg-pink-400  border-2 border-slate-800 shadow-secondary hover:scale-[1.02]"
          >
            Delete
          </button>
          {!task.done ? (
            <button
              onClick={() => toggleTask(task.id)}
              className="w-28 h-8  uppercase font-medium tracking-wider bg-customGray border-2 border-slate-800 shadow-secondary skew-y-3 hover:scale-[1.02]"
            >
              To Do
            </button>
          ) : (
            <button
              onClick={() => toggleTask(task.id)}
              className="w-28 h-8  uppercase font-medium tracking-wider bg-customGreen border-2 border-slate-800 shadow-secondary skew-y-3 hover:scale-[1.02]"
            >
              Done
            </button>
          )}
        </div>

        <motion.div
          className="text-2xl h-12 w-12 grid place-content-center"
          animate={task.done ? "visible" : "hidden"}
          variants={variants}
        >
          <Gem size={48} className="text-slate-800" />
        </motion.div>
      </div>
    </motion.div>
  );
}
