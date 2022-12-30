/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card } from "./index";
import { MemoryRouter } from "react-router-dom";
import { getThumbnail } from "../../uteis/data";

const mockedCharacterCard = {
  id: 1011334,
  title: "3-D Man",
  name: "3-D Man",
  description: "",
  variantDescription: "",
  diamondCode: "",
  fullName: "3-D Man",
  modified: "2014-04-29T14:18:17-0400",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
    extension: "jpg",
  },
};

describe("Card", () => {
  it("should render the CharacterCard component", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Card
          src={getThumbnail(mockedCharacterCard.thumbnail)}
          link={`/characteres/${mockedCharacterCard.id}`}
          name={mockedCharacterCard.name}
        />
      </MemoryRouter>
    );

    const characterCardContainer = getByTestId("card-container");

    expect(characterCardContainer).toBeInTheDocument();
  });

  it("should show the image card", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Card
          src={getThumbnail(mockedCharacterCard.thumbnail)}
          link={`/characteres/${mockedCharacterCard.id}`}
          name={mockedCharacterCard.name}
        />
      </MemoryRouter>
    );

    const cardImage = getByTestId("card-image");

    expect(cardImage).toBeInTheDocument();
  });

  it("should show the link card", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Card
          src={getThumbnail(mockedCharacterCard.thumbnail)}
          link={`/characteres/${mockedCharacterCard.id}`}
          name={mockedCharacterCard.name}
        />
      </MemoryRouter>
    );

    const cardLink = getByTestId("card-link");

    expect(cardLink).toHaveAttribute(
      "href",
      `/characteres/${mockedCharacterCard.id}`
    );
  });

  it("should show the name title", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Card
          src={getThumbnail(mockedCharacterCard.thumbnail)}
          link={`/characteres/${mockedCharacterCard.id}`}
          name={mockedCharacterCard.name}
        />
      </MemoryRouter>
    );

    const cardTitle = getByTestId("card-title");

    expect(cardTitle).toBeInTheDocument();
  });
});
