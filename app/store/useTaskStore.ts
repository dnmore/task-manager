import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "~/types/definition";

interface TaskStore {
  tasks: Task[];
  points: number;
  loading: boolean;
  setLoading: (value: boolean) => void;
  fetchTasks: () => Promise<void>;
  addTask: (task: Omit<Task, "id">) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (id: string) => void;
  toggleStatus: (id: string) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      points: 0,
      loading: true,
      setLoading: (value) => ({ loading: value }),

      fetchTasks: async () => {
        set({ loading: true });
        await new Promise((resolve) => setTimeout(resolve, 400));
        set({ loading: false });
      },

      addTask: (task) => {
        const newTask = { id: uuidv4(), ...task };
        set({ tasks: [...get().tasks, newTask] });
      },

      updateTask: (updatedTask) => {
        set({
          tasks: get().tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          ),
        });
      },

      deleteTask: (id) => {
        set({
          tasks: get().tasks.filter((task) => task.id !== id),
        });
      },

      toggleStatus: (id) => {
        const { tasks, points } = get();
        const updatedTasks = tasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        );

        const toggledTask = tasks.find((task) => task.id === id);
        let updatedPoints = points;

        if (toggledTask) {
          const value =
            toggledTask.priority === "low"
              ? 10
              : toggledTask.priority === "medium"
              ? 20
              : 30;
          updatedPoints += toggledTask.done ? -value : value;
        }

        set({ tasks: updatedTasks, points: updatedPoints });
      },
    }),
    {
      name: "task-storage",
      onRehydrateStorage: () => (state) => {
        state?.setLoading(true);
        setTimeout(() => state?.setLoading(false), 300);
      },
    }
  )
);
