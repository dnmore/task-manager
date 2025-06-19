import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { createMemoryRouter, RouterProvider } from "react-router";
import Home from "../home";

describe("Home component", () => {
  test("renders home route", () => {
    const routes = [
      {
        path: "/",
        element: <Home />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole("heading", {
        name: /Taskie./i,
      })
    ).toBeInTheDocument();
  });

  test("creates a task and displays it in the task list", async () => {
    const user = userEvent.setup();

    const routes = [
      {
        path: "/",
        element: <Home />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
    await user.click(screen.getByRole("button", { name: /create new task/i }));
    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    const textbox = await screen.findByRole("textbox", { name: /task/i });
    await user.type(textbox, "Test Task");

    await user.selectOptions(
      screen.getByRole("combobox", { name: /task priority/i }),
      "High Priority"
    );
    await user.type(
      screen.getByPlaceholderText(/task due date/i),
      "2023-10-01"
    );
    await user.click(screen.getByText(/save/i));
    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  test("completes a high priority task and adds 30 points", async () => {
    const user = userEvent.setup();

    const routes = [
      {
        path: "/",
        element: <Home />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
    await user.click(
      screen.getByRole("button", { name: /Mark task as completed/i })
    );
    expect(screen.getByText(/points: 30/i)).toBeInTheDocument();
  });

  test("filters by high priority", async () => {
    const user = userEvent.setup();

    const routes = [
      {
        path: "/",
        element: <Home />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
    await user.selectOptions(
      screen.getByRole("combobox", { name: /Filter Tasks by Priority/i }),
      "High Priority"
    );
    expect(screen.getAllByText(/high/i).length).toBeGreaterThan(0);
  });

  test("edits task and updates it in the task list", async () => {
    const user = userEvent.setup();

    const routes = [
      {
        path: "/",
        element: <Home />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
    await user.click(
      screen.getByRole("button", { name: /Open edit task modal/i })
    );
    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    const textbox = await screen.findByRole("textbox", { name: /task/i });
    await user.clear(textbox);
    await user.type(textbox, "Edited Task");
    await user.click(screen.getByRole("button", { name: /update/i }));
    expect(screen.getByText("Edited Task")).toBeInTheDocument();
  });
  test("deletes a task and removes it from the task list", async () => {
    const user = userEvent.setup();

    const routes = [
      {
        path: "/",
        element: <Home />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
    await user.click(screen.getByRole("button", { name: /Delete task/i }));
    expect(screen.queryByText("Edited Task")).not.toBeInTheDocument();
  });
});
