import { CharacterType } from "../../@types/CharacterType";
import { getThumbnail } from "../../uteis/data";
import { Container } from "./styles";

interface ICharacterCardProps {
  character: CharacterType;
}

export const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => {
  return (
    <Container className="card align-self-stretch w-100">
      <img
        className="card-img-top w-100"
        src={getThumbnail(character.thumbnail)}
        alt="Imagem"
      />
      <div className="card-body d-flex justify-content-center">
        <h4>{character.name}</h4>
      </div>
    </Container>
  );
};
