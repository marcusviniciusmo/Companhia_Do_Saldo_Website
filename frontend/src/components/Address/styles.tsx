import styled from "styled-components";

export const SearchCepContainer = styled.div`
  position: relative;
`;

export const SearchCepLabel = styled.span`
  color: var(--color-primary);
  font-size: 1.3rem;
  position: absolute;
  top: -0.9rem;
  left: 21rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;