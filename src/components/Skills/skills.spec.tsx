import { render, screen } from "@testing-library/react";
import React from "react";

import { Skills } from "./index";

describe("Skills component", () => {
  it("should render correctly", () => {
    render(<Skills />);

    expect(screen.getByText("Habilidades")).toBeInTheDocument();
  });

  it("should list all skills", () => {
    render(<Skills />);

    const { children } = screen.getByTestId("skills-list");
    expect(children).toHaveLength(21);
  });

  it("should render the correct skill name", () => {
    render(<Skills />);

    expect(screen.getByTitle("React")).toBeInTheDocument();
  });
});
