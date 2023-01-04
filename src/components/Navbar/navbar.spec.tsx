/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Navbar } from "./index";

describe("Navbar", () => {
  it("should render the Navbar component", () => {
    const { getByTestId } = render(
      <Navbar
        items={[
          { title: "Home", id: "" },
          { title: "Characteres", id: "characteres" },
        ]}
      />
    );

    const navbar = getByTestId("navbar-container");

    expect(navbar).toBeInTheDocument();
  });

  it("should show the items contents", async () => {
    const { getByTestId } = render(
      <Navbar
        items={[
          { title: "Home", id: "" },
          { title: "Characteres", id: "characteres" },
        ]}
      />
    );

    const home = getByTestId("link-Home");
    const characteres = getByTestId("link-Characteres");

    expect(home).toHaveAttribute("href", "/");
    expect(characteres).toHaveAttribute("href", "/characteres");
  });
});
