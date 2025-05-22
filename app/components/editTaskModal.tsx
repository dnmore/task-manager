import { useState, useEffect } from "react";
import { useTaskStore } from "~/store/useTaskStore";
import { motion } from "motion/react";

type EditModalProps = {
  isOpen: boolean;
  onClose: () => void;
  taskIdToUpdate: string;
};

const variants = {
  error: {
    borderColor: "#E94A8A",
    x: [-10, 0, 10, 0],
  },
  valid: { borderColor: "#282925" },
};
export function EditTaskModal({
  isOpen,
  onClose,
  taskIdToUpdate,
}: EditModalProps) {
  const updateTask = useTaskStore((state) => state.updateTask);
  const task = useTaskStore((state) =>
    state.tasks.find((t) => t.id === taskIdToUpdate)
  );

  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("🌿 low");
  const [dueDate, setDueDate] = useState("");
  const [done, setDone] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [errorDate, setErrorDate] = useState(false);

  useEffect(() => {
    if (task) {
      setTaskText(task.text);
      setPriority(task.priority);
      setDueDate(task.dueDate);
      setDone(task.done);
    }
  }, [task]);

  if (!isOpen) return null;

  const handleUpdateTask = () => {
    if (taskIdToUpdate) {
      if (!taskText) {
        setErrorText(true);
        return;
      } else if (!dueDate) {
        setErrorDate(true);
        return;
      }
      const updatedTask = {
        id: taskIdToUpdate,
        text: taskText,
        priority: priority,
        dueDate: dueDate,
        done: done,
      };
      updateTask(updatedTask);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="rules-title"
        aria-describedby="rules-description"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" p-6 w-full max-w-sm relative bg-white"
      >
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          className="absolute top-4 right-4"
          aria-label="Close task modal"
        >
          ❌
        </motion.button>

        <h1
          id="rules-title"
          className="text-xl font-bold mb-2 font-sans_grotesque"
        >
          Update Task
        </h1>
        <motion.input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="task description"
          className="w-72 md:w-80 border py-1.5 pl-1 my-2 placeholder:text-gray-400 "
          animate={errorText ? "error" : "valid"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
        />
        <select
          value={priority}
          aria-label="priority"
          onChange={(e) => setPriority(e.target.value)}
          className="w-72 md:w-80  border py-1.5 pl-1 pr-20 my-2  uppercase"
        >
          <option value="🌿 low">🌿 Low Priority</option>
          <option value="🕒 medium">🕒 Medium Priority</option>
          <option value="🔥 high">🔥 High Priority</option>
        </select>
        <motion.input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-72 md:w-80  border py-1.5 pl-1 pr-20 my-2  placeholder:text-gray-400"
          animate={errorDate ? "error" : "valid"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
        />

        <motion.button
          onClick={handleUpdateTask}
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 1 },
          }}
          whileTap={{
            scale: 1.05,
            transition: { duration: 1 },
          }}
          whileInView={{ opacity: 1 }}
          className="w-72 md:w-80 py-2 shadow-primary mt-3 uppercase font-medium tracking-wider border border-black  bg-blue-700 text-white"
        >
          Save
        </motion.button>
      </motion.div>
    </div>
  );
}
