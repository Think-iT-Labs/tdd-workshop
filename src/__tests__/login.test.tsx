import { fireEvent, render, screen } from "@testing-library/react";
import { Sample } from "../components/index";
import "@testing-library/jest-dom";

describe("Login", () => {
  // it("renders a login form", () => {
  //   render(<Sample />);

  //   const usernameInput = screen.getByTestId("username-input");
  //   const passwordInput = screen.getByTestId("password-input");
  //   const loginButton = screen.getByRole("button",  { name:"Login"})

  //   expect(usernameInput).toBeInTheDocument();
  //   expect(passwordInput).toBeInTheDocument();
  //   expect(loginButton).toBeInTheDocument();
  // });

  it("should be disabled when empty inputs ", () => {
    render(<Sample />);

    const usernameInput = screen.getByTestId("username-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toHaveAttribute("disabled");
  });

  it("should be disabled when empty inputs ", () => {
    render(<Sample />);

    const usernameInput = screen.getByTestId("username-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(usernameInput, { target: { value: "username" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(loginButton).not.toHaveAttribute("disabled");
  });
});
