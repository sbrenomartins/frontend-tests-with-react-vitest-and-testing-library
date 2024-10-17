import { render, screen } from "@testing-library/react";
import Login from "./index";

describe("Test the Login component", () => {
  test("Must have a title with the text 'Sign In'", async () => {
    render(<Login />);

    const title = await screen.findByRole("heading", {
      name: "Sign In",
    });

    expect(title).toBeInTheDocument();
  });

  test("Must have two inputs on the screen", async () => {
    render(<Login />);

    const inputs = await screen.findAllByRole("textbox");

    expect(inputs).toHaveLength(2);
  });
});
