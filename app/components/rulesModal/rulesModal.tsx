import { motion } from "motion/react";
import { X, Minus } from "lucide-react";
import { FormattedMessage } from "react-intl";

type RulesModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function RulesModal({ isOpen, onClose }: RulesModalProps) {
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
        className=" p-6 w-full max-w-sm relative bg-white rounded-xl"
      >
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          className="absolute top-4 right-4"
          aria-label="Close rules modal"
        >
          <X size="20" />
        </motion.button>

        <h1
          id="rules-title"
          className="text-xl font-bold mb-2 font-sans_grotesque"
        >
           <FormattedMessage id="app.rules-title" />
        </h1>
        <p id="rules-description" className="text-sm">
          <FormattedMessage id="app.rules-description" />
        </p>
        <ul className="mt-2 list-none flex flex-col text-sm gap-2">
          <li className="flex gap-2">
            <Minus />
          <FormattedMessage id="app.rules-1" />
          </li>
          <li className="flex gap-2">
            <Minus />
             <FormattedMessage id="app.rules-2" />
          </li>

          <li className="flex gap-2">
            <Minus />
            <FormattedMessage id="app.rules-3" />
          </li>
          <li className="flex gap-2">
            <Minus />
           <FormattedMessage id="app.rules-4" />
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
