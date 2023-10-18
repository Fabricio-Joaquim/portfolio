import { render } from "@testing-library/react";

import Socials from ".";

describe("Socials", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Socials />);
    expect(baseElement).toBeTruthy();
  });
});
