import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PriorityFilter } from "../priorityFilter";

describe("PriorityFilter component", () => {
    test("renders priority filter label", () => {
        render(<PriorityFilter value="all" onSelect={() => {}} />);
        expect(screen.getByLabelText(/Filter Tasks by Priority/i)).toBeInTheDocument();
    });
    
    test("renders priority filter select element", () => {
        render(<PriorityFilter value="all" onSelect={() => {}} />);
        expect(screen.getByRole("combobox", { name: /Filter Tasks by Priority/i })).toBeInTheDocument();
    });
    
    test("renders priority filter options", () => {
        render(<PriorityFilter value="all" onSelect={() => {}} />);
        const options = screen.getAllByRole("option");
        expect(options).toHaveLength(4);
        expect(options[0]).toHaveTextContent("All");
        expect(options[1]).toHaveTextContent("Low Priority");
        expect(options[2]).toHaveTextContent("Medium Priority");
        expect(options[3]).toHaveTextContent("High Priority");
    });
})