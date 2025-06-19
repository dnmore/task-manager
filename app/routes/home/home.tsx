import { useState } from "react";
import type { Route } from "./+types/home";
import { Welcome } from "../../components/welcome/welcome";
import { Navbar } from "~/components/navbar/navbar";
import { RulesModal } from "~/components/rulesModal/rulesModal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Taskie | Task Manager with Gamification" },
    { name: "description", content: "Welcome to Taskie!" },
  ];
}

export default function Home() {
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  const openRulesModal = () => setIsRulesModalOpen(true);
  const closeRulesModal = () => setIsRulesModalOpen(false);
  return (
    <div>
      <div className="bg-customGreen py-4">
        <Navbar onOpenRules={openRulesModal} />
      </div>
      
      <RulesModal isOpen={isRulesModalOpen} onClose={closeRulesModal} />
      <Welcome />
    </div>
  );
}
