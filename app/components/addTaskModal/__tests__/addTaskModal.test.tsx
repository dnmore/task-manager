import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AddTaskModal } from "../addTaskModal";

describe("AddTaskModal component", () => {
  test("renders add task modal when isOpen is true", () => {
    const onClose = jest.fn();
    render(<AddTaskModal isOpen={true} onClose={onClose} />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText(/Create Task/i)).toBeInTheDocument();
  });

  test("does not render add task modal when isOpen is false", () => {
    const onClose = jest.fn();
    const { container } = render(
      <AddTaskModal isOpen={false} onClose={onClose} />
    );

    expect(container.firstChild).toBeNull();
  });

  test("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(<AddTaskModal isOpen={true} onClose={onClose} />);

    const closeButton = screen.getByRole("button", {
      name: /close task modal/i,
    });
    closeButton.click();

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
