import { Container } from "../Container";
import { Logo, MainHeader } from "./styles";
import logoImg from "../../assets/marvel.svg";

export const Header = () => {
  return (
    <MainHeader>
      <Container className="p-3 d-flex justify-content-center">
        <Logo src={logoImg} alt="logo" className="img-fluid" />
      </Container>
    </MainHeader>
  );
};
