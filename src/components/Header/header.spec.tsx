/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Header } from "./index";

describe("Header", () => {
  it("should render the list of links", () => {
    const { getByTestId } = render(<Header />);

    const homeLink = getByTestId("link-Home");
    const characteresLink = getByTestId("link-Characteres");

    expect(homeLink).toBeInTheDocument();
    expect(characteresLink).toBeInTheDocument();
  });
});
