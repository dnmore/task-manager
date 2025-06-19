import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RulesModal } from "../rulesModal";

describe("RulesModal component", () => {
    test("renders rules modal when isOpen is true", () => {
        const onClose = jest.fn();
        render(<RulesModal isOpen={true} onClose={onClose} />);
    
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByText(/game rules/i)).toBeInTheDocument();
    });
    
    test("does not render rules modal when isOpen is false", () => {
        const onClose = jest.fn();
        const { container } = render(<RulesModal isOpen={false} onClose={onClose} />);
    
        expect(container.firstChild).toBeNull();
    });
    
    test("calls onClose when close button is clicked", () => {
        const onClose = jest.fn();
        render(<RulesModal isOpen={true} onClose={onClose} />);
    
        const closeButton = screen.getByRole("button", {
        name: /close rules modal/i,
        });
        closeButton.click();
    
        expect(onClose).toHaveBeenCalledTimes(1);
    });
})