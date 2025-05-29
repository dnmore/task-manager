import { useState } from "react";
import { AddTaskModal } from "~/components/addTaskModal";

type NavbarProps = {
  onOpenRules: () => void;
};

export function Navbar({ onOpenRules }: NavbarProps) {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const openTaskModal = () => setIsTaskModalOpen(true);
  const closeTaskModal = () => setIsTaskModalOpen(false);
  return (
    <header
      role="banner"
      className="pt-4 pb-2 md:px-8 mx-auto flex flex-col gap-6 justify-center items-center md:flex-row md:justify-between  mb-4 text-base font-bold font-sans_grotesque "
    >
      <h1
        className="text-6xl font-extrabold tracking-wider text-white mb-4 skew-y-2"
        id="logo"
      >
        Taskie<span className="text-customPurple">.</span>
      </h1>
      <div className="flex items-center gap-8 py-2">
        <button
          onClick={openTaskModal}
          
          aria-label="Create new task"
          className="font-sans_grotesque py-2 px-4  uppercase tracking-wider bg-customPurple border-2 border-slate-800  shadow-primary -skew-y-3 hover:scale-[1.02]"
        >
          Create Task
        </button>
        <AddTaskModal isOpen={isTaskModalOpen} onClose={closeTaskModal} />

       
        <button
          onClick={onOpenRules}
          aria-label="View game rules"
          className="border-b-4 border-b-pink-500 hover:text-pink-500 transition-all ease-in-out"
        >
          Rules
        </button>
      </div>
    </header>
  );
}
