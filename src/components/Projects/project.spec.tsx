import { render } from "@testing-library/react";

import { Projects } from ".";

describe("Project", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Projects />);
    expect(baseElement).toBeTruthy();
  });
});
