import styled from "styled-components";

export const Container = styled.table`
  margin-top: 2rem;
`;

export const Row = styled.tr``;

export const Header = styled.thead``;

export const CellHeader = styled.th`
  background: var(--color-primary);
  color: #FFFFFF;
  padding: 0.5rem 2rem;
  border-radius: 0.3rem;
`;

export const Body = styled.tbody``;

export const CellData = styled.td`
  color: var(--color-secondary);
  font-size: 1.3rem;
  text-align: center;
  padding: 0.1rem 2rem;
  border: 0.1rem solid var(--color-primary);
  border-radius: 0.3rem;
  
  &.action {
    color: #FF0000;
    padding: 1rem 2rem 0.5rem 2rem;
    cursor: pointer;
  }
`;
