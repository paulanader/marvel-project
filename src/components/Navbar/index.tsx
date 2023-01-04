import { Line, Nav } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { ItemType } from "../../@types/ItemType";

interface INavbarProps {
  items: ItemType[];
}

export const Navbar: React.FC<INavbarProps> = ({ items }) => {
  return (
    <Nav className="navbar navbar-expand-lg" data-testid="navbar-container">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-testid="navbar-icon-button"
        >
          <AiOutlineMenu color="#ffffff" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {items.map((item) => (
              <Line className={`nav-item`} key={item.id}>
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href={`/${item.id}`}
                  data-testid={`link-${item.title}`}
                >
                  {item.title}
                </a>
              </Line>
            ))}
          </ul>
        </div>
      </div>
    </Nav>
  );
};
