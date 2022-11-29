import { Nav } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";

interface INavbarProps {
  items: [
    {
      title: string;
      id: string;
    }
  ];
  selected?: boolean;
}

export const Navbar: React.FC<INavbarProps> = ({ items, selected }) => {
  return (
    <Nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <AiOutlineMenu color="#ffffff" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {items.map((item) => (
              <li className={`nav-item `}>
                <a
                  className={`nav-link active ${
                    selected ? "selected-nav" : "text-white"
                  }`}
                  aria-current="page"
                  href={`/${item.id}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Nav>
  );
};
