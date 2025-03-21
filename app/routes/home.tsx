import type { Route } from "./+types/home";
import { Header } from "~/components/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Taskie 🦄" },
    { name: "description", content: "Task Management App with Gamification" },
  ];
}

const tasks = [
  {
    id: 1,
    description: "Budget and Contract",
    dueDate: "31/03/2025",
    checked: true,
  },
  {
    id: 2,
    description: "Website design and development",
    dueDate: "15/04/2025",
    checked: false,
  },
  {
    id: 3,
    description: "Design new dashboard",
    dueDate: "20/04/2025",
    checked: false,
  },
];

export default function Home() {
  const taskslist = tasks.map((task) => (
    <li
      className="flex justify-between p-4 border-b border-b-black font-semibold cursor-pointer hover:bg-yellow-50"
      key={task.id}
    >
      <div className="flex gap-2">
        <input
          type="checkbox"
          name="done"
          id="done"
          defaultChecked={task.checked}
        />
        <p>{task.description}</p>
      </div>
      <div>
        <p className="border border-black bg-red-400 px-2">{task.dueDate}</p>
      </div>
    </li>
  ));
  return (
    <div className="flex flex-col py-7 px-6 mb-10">
      <Header />
      <button className="w-full max-w-80 mx-auto my-6  h-16  uppercase tracking-wider bg-violet-500 hover:bg-violet-600 border-2 border-black text-3xl font-extrabold shadow-primary cursor-pointer">
        Create Task
      </button>
      <h2 className="text-2xl font-bold border-b border-b-black my-4">
        All Tasks
      </h2>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between mb-6">
        <div className="flex flex-col md:flex-row ">
          <button className="px-6 py-2 font-semibold bg-black text-white cursor-pointer">
            All Tasks
          </button>
          <button className="px-6 py-2 font-semibold bg-transparent cursor-pointer">
            Pending
          </button>
          <button className="px-6 py-2 font-semibold bg-transparent cursor-pointer">
            Done
          </button>
        </div>

        <button className="px-6 py-2 font-semibold flex justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >
            <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
          </svg>
          Sort
        </button>
      </div>

      <ul className=" flex flex-col">{taskslist}</ul>
    </div>
  );
}
