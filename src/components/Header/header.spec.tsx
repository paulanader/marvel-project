/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./index";

describe("Header", () => {
  it("should render the list of links", () => {
    const { debug, getByTestId } = render(<Header />);

    const homeLink = getByTestId("link-Home");
    const characteresLink = getByTestId("link-Characteres");

    debug();

    expect(homeLink).toBeInTheDocument();
    expect(characteresLink).toBeInTheDocument();
  });

  it("should go to the clicked link", async () => {
    const { debug, getByTestId } = render(<Header />);

    const homeLink = getByTestId("link-Home");

    userEvent.click(homeLink);

    debug();
    expect(homeLink).toBeInTheDocument();
  });
});
