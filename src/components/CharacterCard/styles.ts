import styled from "styled-components";

export const Container = styled.div`
  transition: transform 300ms;

  &:hover {
    transform: scale(1.13);
    z-index: 1;
    box-shadow: 0 0 5px var(--color-gray);
  }
`;
