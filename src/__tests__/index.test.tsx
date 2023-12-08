import { render, screen } from "@testing-library/react";
import { Sample } from "@/components";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Sample />);

    const heading = screen.getByRole("heading", {
      name: /welcome to the app/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
