import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProgressBar } from "../progressBar";

describe("ProgressBar component", () => {
    test("renders points", () => {
        render(<ProgressBar />);
        expect(screen.getByText(/Points:/i)).toBeInTheDocument();
    })
    test("renders progress bar with initial values", () => {
        render(<ProgressBar />);
        expect(
            screen.getByRole("progressbar", {
                name: /Progress toward next badge level. 0 out of 100 points earned./i,
            })
        ).toBeInTheDocument();
    });
})