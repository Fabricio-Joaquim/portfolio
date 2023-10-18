import { render, screen } from "@testing-library/react";

import { Header } from "./";

describe("Header", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });

  it("should render the text 'Header'", () => {
    render(<Header />);
    expect(
      screen.getByText("Fabricio Joaquim dos Santos Melo"),
    ).toBeInTheDocument();
  });
});
