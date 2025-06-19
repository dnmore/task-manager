import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TaskItem } from "../taskItem";

describe("TaskItem component", () => {
  test("renders task item with correct text, priority, due date and displays edit and delete buttons", () => {
    const task = {
      id: "1",
      text: "Test Task",
      priority: "high",
      dueDate: "2023-10-01",
      done: false,
    };

    render(<TaskItem task={task} />);

    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("high")).toBeInTheDocument();
    expect(screen.getByText("2023-10-01")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Open edit task modal/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Delete task/i })
    ).toBeInTheDocument();
  });
});
