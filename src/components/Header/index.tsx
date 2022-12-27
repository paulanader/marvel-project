import { Container } from "../Container";
import { Logo, MainHeader } from "./styles";
import logoImg from "../../assets/marvel.svg";
import { Navbar } from "../Navbar";

export const Header = () => {
  return (
    <MainHeader>
      <Container className="mt-4">
        <div className="d-flex justify-content-center">
          <Logo src={logoImg} alt="logo" className="img-fluid" />
        </div>
        <div className="d-flex justify-content-center">
          <Navbar
            items={[
              { title: "Home", id: "" },
              { title: "Characteres", id: "characteres" },
            ]}
          />
        </div>
      </Container>
    </MainHeader>
  );
};
