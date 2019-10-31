import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

describe("dashboard buttons", () => {
  it("has strike button", () => {
    const wrapper = render(<Dashboard />);
    wrapper.getByText(/Strike/i);
  });
  it("has ball button", () => {
    const wrapper = render(<Dashboard />);
    wrapper.getByText(/ball/i);
  });
  it("has foul button", () => {
    const wrapper = render(<Dashboard />);
    wrapper.getByText(/Foul/i);
  });
  it("has hit button", () => {
    const wrapper = render(<Dashboard />);
    wrapper.getByText(/Hit/i);
  });
});
