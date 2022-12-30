import { Container, Title } from "./styles";

interface ICardProps {
  src: string;
  link: string;
  name: string;
}

export const Card: React.FC<ICardProps> = ({ src, link, name }) => {
  return (
    <Container
      className="card align-self-stretch w-100 justify-content-center"
      data-testid="card-container"
    >
      <img
        className="card-img-top w-100 mb-2"
        src={src}
        alt="Imagem"
        data-testid="card-image"
      />
      <Title
        to={link}
        data-testid="card-link"
        className="stretched-link mt-auto d-flex text-center justify-content-center"
      >
        <h4 className="mt-auto text-center d-flex" data-testid="card-title">
          {name}
        </h4>
      </Title>
    </Container>
  );
};
