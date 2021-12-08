import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the title", () => {
    render(<App />);
    const linkElement = screen.getByText(/GitHub Timeline/i);
    expect(linkElement).toBeInTheDocument();
  });
});
