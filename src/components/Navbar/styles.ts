import styled from "styled-components";

export const Nav = styled.nav`
  background-color: var(--color-dark);
`;

export const Line = styled.li`
  transition: transform 300ms;
  font-size: 20px;

  &:hover {
    border-bottom: 3px solid var(--color-red);
  }
`;
