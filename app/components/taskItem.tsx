import { useState } from "react";
import { useTaskStore } from "~/store/useTaskStore";
import { motion } from "motion/react";
import type { Task } from "~/types/definition";
import { EditTaskModal } from "./editTaskModal";

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
      className="flex flex-col  gap-4 my-2 py-6 px-4 border-2 border-slate-800 shadow-primary"
    >
      <div className="text-sm mb-8">
        <p className="text-base font-semibold uppercase">Task: {task.text}</p>
        <p>Priority: {task.priority}</p>
        <p>Due Date: {task.dueDate}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 place-items-end ">
        <div className="flex flex-wrap gap-2">
          <motion.button
            onClick={() => handleEditTask(task)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            className="w-28 h-8 uppercase font-medium tracking-wider bg-yellow-300 border-2 border-slate-800 shadow-secondary"
          >
            Edit
          </motion.button>
          <EditTaskModal
            taskIdToUpdate={taskIdToUpdate}
            isOpen={isUpdateModalOpen}
            onClose={closeUpdateModal}
          />
          <motion.button
            onClick={() => deleteTask(task.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            className="w-28 h-8  uppercase font-medium tracking-wider bg-pink-500  border-2 border-slate-800 shadow-secondary"
          >
            Delete
          </motion.button>
          {!task.done ? (
            <motion.button
              onClick={() => toggleTask(task.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="w-28 h-8  uppercase font-medium tracking-wider bg-gray-200 border-2 border-slate-800 shadow-secondary"
            >
              To Do
            </motion.button>
          ) : (
            <motion.button
              onClick={() => toggleTask(task.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              className="w-28 h-8  uppercase font-medium tracking-wider bg-lime-400 border-2 border-slate-800 shadow-secondary"
            >
              Done
            </motion.button>
          )}
        </div>

        <motion.div
          className="text-2xl h-12 w-12 grid place-content-center  border-2 border-slate-800 bg-pink-300 shadow-secondary"
          animate={task.done ? "visible" : "hidden"}
          variants={variants}
        >
          ✔️
        </motion.div>
      </div>
    </motion.div>
  );
}
