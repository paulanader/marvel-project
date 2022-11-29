import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  transition: transform 300ms;
  background-color: rgba(18, 18, 20, 0.3);

  &:hover {
    transform: scale(1.05);
    z-index: 1;
    box-shadow: 0 0 5px var(--color-gray);
  }
`;

export const Title = styled(Link)`
  text-decoration: none;
  font-size: 0.85rem;
  color: var(--color-white);

  &:hover {
    color: var(--color-second-gray);
  }
`;
