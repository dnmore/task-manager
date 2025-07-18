import { motion } from "motion/react";
import { v4 as uuidv4 } from "uuid";
import { useTaskStore } from "~/store/useTaskStore";
import { useTaskForm } from "~/hooks/useTaskForm";
import { X } from "lucide-react";
type AddModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const variants = {
  error: {
    borderColor: "#E94A8A",
    x: [-10, 0],
  },
  valid: { borderColor: "#959692" },
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
        className="font-sans font-normal p-6 w-full max-w-sm mx-4 md:mx-auto relative bg-customGray rounded-xl flex flex-col items-center"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 hover:scale-[1.2]"
          aria-label="Close task modal"
        >
          <X size="20" />
        </button>

        <h1
          id="modalTitle"
          className="text-2xl font-sans_grotesque font-semibold"
        >
          Create Task
        </h1>
        <p id="modalDesc" className="text-sm mb-2">
          Enter task details below
        </p>
        <form>
          <label htmlFor="description" className="uppercase text-xs block">Task</label>
          <motion.input
            type="text"
            id="description"
            name="description"
            aria-label="Task description"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="task description"
            className="w-72 md:w-80 border  rounded-sm py-1.5 pl-1 mt-2 mb-4 placeholder:text-gray-400 placeholder:text-sm focus-within:outline-2 focus-within:outline-customPurple"
            animate={errorText ? "error" : "valid"}
            variants={variants}
            transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
          />
          <label htmlFor="priority-select" className="uppercase text-xs block">
            priority
          </label>
          <select
            value={priority}
            id="priority-select"
            name="priority-select"
            aria-label="Task priority"
            onChange={(e) => setPriority(e.target.value)}
            className="w-72 md:w-80 text-sm  border border-[#959692]  py-1.5 pl-1 pr-20 mt-2 mb-4  uppercase focus-within:outline-2 focus-within:outline-customPurple"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <label htmlFor="date-select" className="uppercase text-xs block">
            due date
          </label>
          <motion.input
            type="date"
            id="date-select"
            name="date-select"
            aria-label="Task due date"
            data-testid="due-date-input"
            placeholder="task due date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-72 md:w-80  border  py-1.5 pl-1 pr-20 mt-2 mb-4  placeholder:text-gray-400 placeholder:text-sm focus-within:outline-2 focus-within:outline-customPurple"
            animate={errorDate ? "error" : "valid"}
            variants={variants}
            transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
          />
        </form>

        <button
          onClick={handleCreateTask}
          aria-label="Save task"
          type="button"
          className="w-72 py-3 shadow-primary mt-3 uppercase text-sm font-medium tracking-wider border-2 border-slate-800  bg-customPurple skew-y-1 hover:scale-[1.02]"
        >
          Save
        </button>
      </motion.div>
    </div>
  );
}
