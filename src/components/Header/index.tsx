import { Container } from "../Container";
import { Logo, MainHeader } from "./styles";
import logoImg from "../../assets/marvel.svg";
import { Navbar } from "../Navbar";

export const Header = () => {
  return (
    <MainHeader>
      <Container className="p-1">
        <div className="d-flex justify-content-center">
          <Logo src={logoImg} alt="logo" className="img-fluid" />
        </div>
        <Navbar items={[{ title: "Characteres", id: "characteres" }]} />
      </Container>
    </MainHeader>
  );
};
