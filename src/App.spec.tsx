import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test the App component", () => {
  test("Must have two titles in page", async () => {
    render(<App />);

    const titles = await screen.findAllByRole("heading");

    expect(titles).toHaveLength(2);
  });

  test("Must have a title with text 'Hello World'", async () => {
    render(<App />);

    const title = await screen.findByRole("heading", {
      name: "Hello World",
    });

    expect(title).toBeInTheDocument();
  });
});
