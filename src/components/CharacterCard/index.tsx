import { CharacterType } from "../../@types/CharacterType";
import { getThumbnail } from "../../uteis/data";
import { Container, Title } from "./styles";

interface ICharacterCardProps {
  character: CharacterType;
}

export const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => {
  return (
    <>
      {character.thumbnail.extension && character.thumbnail.path && (
        <Container className="card align-self-stretch w-100 justify-content-center">
          <img
            className="card-img-top w-100 mb-2"
            src={getThumbnail(character.thumbnail)}
            alt="Imagem"
          />
          <Title
            to={`/characteres/${character.id}`}
            className="stretched-link mt-auto d-flex text-center justify-content-center"
          >
            <h4 className="mt-auto text-center d-flex">{character.name}</h4>
          </Title>
        </Container>
      )}
    </>
  );
};
