import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Header tests", () => {
  //makes sure that the app always has this specific text as the heading
  //can use "test" or "it"
  it("should find the header text", () => {
    //the file that's being tested
    render(<App />);
    //query methods being used
    const headerElement = screen.getByText(/To-do List/i);
    //assertions
    expect(headerElement).toBeInTheDocument();
  });

  it("should have a h1 tag as the main header element", () => {
    render(<App />);
    const headingElementType = screen.getByText(/To-do List/i);
    expect(headingElementType).toContainHTML("h1");
  });
});

