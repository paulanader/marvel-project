import styled from "styled-components";

export const Link = styled.a`
  transition: transform 300ms;
  text-decoration: none;
  color: var(--color-white);

  &:hover {
    text-decoration: none;
    color: var(--color-white);
    font-weight: bold;
    font-size: 16.5px;
  }
`;
