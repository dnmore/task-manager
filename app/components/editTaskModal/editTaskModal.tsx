import { useEffect } from "react";
import { useTaskStore } from "~/store/useTaskStore";
import { motion } from "motion/react";
import { useTaskForm } from "~/hooks/useTaskForm";
import { FormattedMessage } from "react-intl";
import { X } from "lucide-react";

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
  valid: { borderColor: "#959692" },
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
        className=" font-sans font-normal p-6 w-full max-w-sm mx-4 md:mx-auto relative bg-customGray rounded-xl flex flex-col items-center"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:scale-[1.2]"
          aria-label="Close task modal"
        >
          <X size="20" />
        </button>

        <h1
          id="modalTitle"
          className="text-2xl font-sans_grotesque font-semibold"
        >
           <FormattedMessage id="app.modalTitle-update" />
        </h1>
        <p id="modalDesc" className="text-sm mb-2">
          <FormattedMessage id="app.modalDesc-update" />
        </p>
        <form>
          <label htmlFor="description" className="uppercase text-xs block">
          <FormattedMessage id="app.descLabel" />
          </label>
          <motion.input
            type="text"
            id="description"
            name="description"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="task description"
            className="w-72 md:w-80 border text-sm py-1.5 pl-1 mt-2 mb-4 placeholder:text-gray-400 focus-within:outline-2 focus-within:outline-customPurple"
            animate={errorText ? "error" : "valid"}
            variants={variants}
            transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
          />
          <label htmlFor="priority-select" className="uppercase text-xs block">
           <FormattedMessage id="app.priorityLabel" />
          </label>
          <select
            value={priority}
            id="priority-select"
            name="priority-select"
            onChange={(e) => setPriority(e.target.value)}
            className="w-72 md:w-80 border border-[#959692] text-sm py-1.5 pl-1 pr-20 mt-2 mb-4  uppercase focus-within:outline-2 focus-within:outline-customPurple"
          >
             <option value="low"><FormattedMessage id="app.optionLow" /></option>
            <option value="medium"><FormattedMessage id="app.optionMedium" /></option>
            <option value="high"><FormattedMessage id="app.optionHigh" /></option>
          </select>
          <label htmlFor="date-select" className="uppercase text-xs block">
          <FormattedMessage id="app.dueDateLabel" />
          </label>
          <motion.input
            type="date"
            id="date-select"
            name="date-select"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-72 md:w-80  border text-sm  py-1.5 pl-1 pr-20 mt-2 mb-4  placeholder:text-gray-400 focus-within:outline-2 focus-within:outline-customPurple"
            animate={errorDate ? "error" : "valid"}
            variants={variants}
            transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
          />
        </form>

        <button
          onClick={handleUpdateTask}
          aria-label="Update task"
          type="button"
          className="w-72 py-3 shadow-primary mt-3 uppercase text-sm font-medium tracking-wider border-2 border-slate-800  bg-customYellow skew-y-1 hover:scale-[1.02]"
        >
           <FormattedMessage id="app.update" />
        </button>
      </motion.div>
    </div>
  );
}
