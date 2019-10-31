import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

describe("displaying scores", () => {
  it("contains balls score", () => {
    const wrapper = render(<Display />);
    wrapper.getByText(/Balls:/i);
  });

  it("contains strikes score", () => {
    const wrapper = render(<Display />);
    wrapper.getByText(/Strikes:/i);
  });
});
