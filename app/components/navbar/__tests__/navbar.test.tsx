import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryRouter, RouterProvider } from "react-router";
import { Navbar } from "../navbar";

describe("Navbar component", () => {
  test("renders the navbar", () => {
    const onOpenRules = jest.fn();
    const routes = [
      {
        path: "/",
        element: <Navbar onOpenRules={onOpenRules} />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    const navbar = screen.getByRole("banner");
    expect(navbar).toBeInTheDocument();
  });
});
