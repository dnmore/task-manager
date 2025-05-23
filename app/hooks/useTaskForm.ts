import { useState } from "react";

export function useTaskForm() {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("🌿 low");
  const [dueDate, setDueDate] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [done, setDone] = useState(false);

  const resetForm = () => {
    setTaskText(""),
      setPriority("🌿 low"),
      setDueDate(""),
      setErrorText(false),
      setErrorDate(false);
  };

  const validate = () => {
    let valid = true;
    if (!taskText) {
      setErrorText(true);
      valid = false;
    } else {
      setErrorText(false);
    }

    if (!dueDate) {
      setErrorDate(true);
      valid = false;
    } else {
      setErrorDate(false);
    }
    return valid;
  };

  return {
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
    done,
    setDone
  };
}
