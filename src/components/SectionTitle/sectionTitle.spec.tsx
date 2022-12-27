/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { SectionTitle } from "./index";

describe("SectionTitle", () => {
  it("should render the title content", () => {
    const { getByText } = render(<SectionTitle title="Character" />);

    const title = getByText("Character");

    expect(title).toBeInTheDocument();
  });
});
