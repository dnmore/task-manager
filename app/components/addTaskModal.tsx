import { motion } from "motion/react";
import { v4 as uuidv4 } from "uuid";
import { useTaskStore } from "~/store/useTaskStore";
import { useTaskForm } from "~/hooks/useTaskForm";
type AddModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const variants = {
  error: {
    borderColor: "#E94A8A",
    x: [-10, 0],
  },
  valid: { borderColor: "#282925" },
};

export function AddTaskModal({ isOpen, onClose }: AddModalProps) {
  const addTask = useTaskStore((state) => state.addTask);
  const {
    taskText,
    setTaskText,
    priority,
    setPriority,
    dueDate,
    setDueDate,
    errorText,
    errorDate,
    resetForm,
    validate,
  } = useTaskForm();

  if (!isOpen) return null;

  const handleCreateTask = () => {
    if (!validate()) return;

    const newTask = {
      id: uuidv4(),
      text: taskText,
      priority: priority,
      dueDate: dueDate,
      done: false,
    };
    addTask(newTask);
    resetForm();
    onClose();
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        aria-describedby="modalDesc"
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
          onClick={handleClose}
          whileHover={{ scale: 1.1 }}
          className="absolute top-4 right-4"
          aria-label="Close task modal"
        >
          ❌
        </motion.button>

        <h1
          id="modalTitle"
          className="text-xl font-bold mb-2 font-sans_grotesque"
        >
          Create Task
        </h1>
        <p id="modalDesc">Enter task details below</p>
        <label htmlFor="description" className="sr-only">
          Enter task description
        </label>
        <motion.input
          type="text"
          id="description"
          name="description"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="task description"
          className="w-72 md:w-80 border border-slate-800 py-1.5 pl-1 my-2 placeholder:text-gray-400 focus-within:outline-2 focus-within:outline-indigo-600"
          animate={errorText ? "error" : "valid"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
        />
        <label htmlFor="priority-select" className="sr-only">
          Select priority
        </label>
        <select
          value={priority}
          id="priority-select"
          name="priority-select"
          onChange={(e) => setPriority(e.target.value)}
          className="w-72 md:w-80  border border-slate-800 py-1.5 pl-1 pr-20 my-2  uppercase focus-within:outline-2 focus-within:outline-indigo-600"
        >
          <option value="🌿 low">🌿 Low Priority</option>
          <option value="🕒 medium">🕒 Medium Priority</option>
          <option value="🔥 high">🔥 High Priority</option>
        </select>
        <label htmlFor="date-select" className="sr-only">
          Select due date
        </label>
        <motion.input
          type="date"
          id="date-select"
          name="date-select"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-72 md:w-80  border border-slate-800 py-1.5 pl-1 pr-20 my-2  placeholder:text-gray-400 focus-within:outline-2 focus-within:outline-indigo-600"
          animate={errorDate ? "error" : "valid"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
        />

        <motion.button
          onClick={handleCreateTask}
          aria-label="Save task"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 1.05,
          }}
          className="w-72 md:w-80 py-2 shadow-primary mt-3 uppercase font-medium tracking-wider border border-slate-800  bg-indigo-300"
        >
          Save
        </motion.button>
      </motion.div>
    </div>
  );
}
