import { useState } from "react";
import { useTaskStore } from "~/store/useTaskStore";
import { motion } from "motion/react";
import type { Task } from "~/types/definition";
import { EditTaskModal } from "../editTaskModal/editTaskModal";
import { Gem, Clock } from "lucide-react";
import clsx from "clsx";
import { FormattedMessage } from "react-intl";

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
    <div
      key={task.id}
      className="flex flex-col  gap-4 my-6 pb-6 px-4 bg-customGray border-2 border-slate-800 shadow-secondary rounded-lg"
    >
      <span
      className={clsx(
        "w-10 h-7 rounded-sm border-2 border-black -mt-4 relative py-2",
        {
          "bg-green-600": task.priority === "low",
          "bg-yellow-500": task.priority === "medium",
          "bg-red-600": task.priority === "high",
        }
      )}
    >
     
    </span>
      <div className="mb-8">
        <p className="text-xl font-semibold font-sans_grotesque uppercase">
          {task.text}
        </p>

        <p className="flex items-center gap-2 mt-2 text-base">
          <Clock size={24} className="text-slate-800" />
          
          
          
           {task.dueDate}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 place-items-end ">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleEditTask(task)}
            aria-label="Open edit task modal"
            className="w-28 h-8 uppercase font-medium tracking-wider bg-customYellow border-2 border-slate-800 shadow-secondary skew-y-3 hover:scale-[1.02]"
          >
             <FormattedMessage id="app.edit" />
          </button>
          <EditTaskModal
            taskIdToUpdate={taskIdToUpdate}
            isOpen={isUpdateModalOpen}
            onClose={closeUpdateModal}
          />
          <button
            onClick={() => deleteTask(task.id)}
            aria-label="Delete task"
            className="w-28 h-8  uppercase font-medium tracking-wider bg-pink-400  border-2 border-slate-800 shadow-secondary hover:scale-[1.02]"
          >
            <FormattedMessage id="app.delete" />
          </button>
          {!task.done ? (
            <button
              onClick={() => toggleTask(task.id)}
              aria-label="Mark task as completed"
              className="w-28 h-8  uppercase font-medium tracking-wider bg-customGray border-2 border-slate-800 shadow-secondary skew-y-3 hover:scale-[1.02]"
            >
              <FormattedMessage id="app.todo" />
            </button>
          ) : (
            <button
              onClick={() => toggleTask(task.id)}
              aria-label="Mark task as pending"
              className="w-28 h-8  uppercase font-medium tracking-wider bg-customGreen border-2 border-slate-800 shadow-secondary skew-y-3 hover:scale-[1.02]"
            >
              <FormattedMessage id="app.done" />
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
    </div>
  );
}
