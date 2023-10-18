import { render } from "@testing-library/react";

import { Navbar } from ".";

describe("Navbar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });
});
