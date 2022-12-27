import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { useCharacter } from "../../hooks/CharactersProvider";

export const Character = () => {
  const { character, getCharacter } = useCharacter();
  const { id } = useParams();

  useEffect(() => {
    getCharacter(id ? id : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <Header />
      <Container className="mt-3">
        <Breadcrumb
          page="Characteres"
          link="/characteres"
          pageTitle="Character"
        />
        <h1 className="text-white">{character?.name}</h1>
      </Container>
    </Wrapper>
  );
};
