import { useEffect } from "react";
import { useTaskStore } from "~/store/useTaskStore";
import { motion } from "motion/react";
import { useTaskForm } from "~/hooks/useTaskForm";

type EditModalProps = {
  isOpen: boolean;
  onClose: () => void;
  taskIdToUpdate: string;
};

const variants = {
  error: {
    borderColor: "#E94A8A",
    x: [-10, 0],
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
  const {
    taskText,
    setTaskText,
    priority,
    setPriority,
    dueDate,
    setDueDate,
    done,
    setDone,
    errorText,
    errorDate,
    resetForm,
    validate,
  } = useTaskForm();

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
      if (!validate()) return;
      const updatedTask = {
        id: taskIdToUpdate,
        text: taskText,
        priority: priority,
        dueDate: dueDate,
        done: done,
      };
      updateTask(updatedTask);
      resetForm();
      onClose();
    }
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
          onClick={onClose}
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
          Update Task
        </h1>
        <p id="modalDesc">Update task details below</p>
        <label htmlFor="description" className="sr-only">
          Edit task description
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
          Edit priority
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
          Edit due date
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
          onClick={handleUpdateTask}
          aria-label="Update task"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 1.05,
          }}
          className="w-72 md:w-80 py-2 shadow-primary mt-3 uppercase font-medium tracking-wider border border-slate-800  bg-indigo-300"
        >
          Update
        </motion.button>
      </motion.div>
    </div>
  );
}
