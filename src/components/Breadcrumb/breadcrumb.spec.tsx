/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Breadcrumb } from "./index";

describe("Breadcrumb", () => {
  it("should render the list of links", () => {
    const { getByText } = render(
      <Breadcrumb link="/home" page="Characteres" pageTitle="Character" />
    );

    const home = getByText("Home");
    const page = getByText("Characteres");
    const pageTitle = getByText("Characteres");

    expect(home).toBeInTheDocument();
    expect(page).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });

  it("should not show the page link", () => {
    const { queryByTestId } = render(
      <Breadcrumb link="/home" pageTitle="Characteres" />
    );
    const page = queryByTestId("link-page");

    expect(page).not.toBeInTheDocument();
  });

  it("should have the href attribute", () => {
    const { getByTestId } = render(
      <Breadcrumb link="/home" page="Characteres" pageTitle="Character" />
    );

    const page = getByTestId("link-page");

    expect(page).toHaveAttribute("href", "/home");
  });
});
