import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EditTaskModal } from "../editTaskModal";

describe("EditTaskModal component", () => {
  test("renders edit task modal when isOpen is true", () => {
    const onClose = jest.fn();
    render(
      <EditTaskModal isOpen={true} onClose={onClose} taskIdToUpdate="1" />
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /update task/i })
    ).toBeInTheDocument();
  });

  test("does not render edit task modal when isOpen is false", () => {
    const onClose = jest.fn();
    const { container } = render(
      <EditTaskModal isOpen={false} onClose={onClose} taskIdToUpdate="1" />
    );

    expect(container.firstChild).toBeNull();
  });

  test("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(
      <EditTaskModal isOpen={true} onClose={onClose} taskIdToUpdate="1" />
    );

    const closeButton = screen.getByRole("button", {
      name: /close task modal/i,
    });
    closeButton.click();

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
