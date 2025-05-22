import { useTaskStore } from "~/store/useTaskStore";
type NavbarProps = {
  onOpenRules: () => void;
};

export function Navbar({ onOpenRules }: NavbarProps) {
  const points = useTaskStore((state) => state.points);
  return (
    <header
      role="banner"
      className="w-full max-w-xs pt-4 pb-2 px-4 my-5 mx-auto flex flex-col justify-center items-center  mb-4 text-base font-bold font-sans_grotesque border-2  border-black shadow-primary"
    >
      <h1 className="text-2xl font-extrabold tracking-wider">Taskie</h1>
      <div className="flex items-center gap-8 py-2">
        <button
          onClick={onOpenRules}
          aria-label="View game rules"
          className="border-b-4 border-b-transparent hover:border-b-purple-800 hover:text-purple-800 transition-all ease-in-out"
        >
          Rules
        </button>
        <span aria-live="polite" className="border-b-4 border-b-transparent">
          Points: {points}
        </span>
      </div>
    </header>
  );
}
