import { motion } from "motion/react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function RulesModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

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
           aria-label="Close rules modal"
        >
          ❌
        </motion.button>

        <h1 id="rules-title" className="text-xl font-bold mb-2 font-sans_grotesque">
          Game Rules
        </h1>
        <p id="rules-description"  className="text-base">Here are the rules for the game:</p>
        <ul className="mt-2 list-disc list-inside text-sm ">
          <li className="my-2">Complete tasks to earn points.</li>
          <li className="my-2">
            Reach different levels based on points: 🐴 Taskie Novice,🦓 Taskie
            Pro, 🦄 Taskie Guru.
          </li>
          <li className="my-2">Higher priority tasks give you more points.</li>
        </ul>
      </motion.div>
    </div>
  );
}
