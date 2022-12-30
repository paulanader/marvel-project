import { useEffect } from "react";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Wrapper } from "../../components/Wrapper";
import { useCharacter } from "../../hooks/CharactersProvider";
import { getThumbnail } from "../../uteis/data";

export const Main = () => {
  const { characters, pageCount, currentPage, getCharacters } = useCharacter();

  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <Header />
      <Container className="mt-3">
        {characters && (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
            {characters.map((character) => (
              <div key={character.name} className="col d-flex">
                {character.thumbnail.extension && character.thumbnail.path && (
                  <Card
                    src={getThumbnail(character.thumbnail)}
                    link={`/characteres/${character.id}`}
                    name={character.name}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mb-4">
          <Pagination
            pageCount={pageCount}
            forcePage={currentPage - 1}
            onPageChange={(event) => getCharacters(event.selected + 1)}
          />
        </div>
      </Container>
    </Wrapper>
  );
};
