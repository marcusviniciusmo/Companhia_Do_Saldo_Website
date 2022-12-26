import styled from "styled-components";
import { IoClose } from 'react-icons/io5';

export const Container = styled.div`
  background: var(--background);
  width: 100rem;
  height: 50rem;
  margin: auto;
  border-radius: 0.5rem;
  overflow: auto;
`;

export const Header = styled.div`
  color: var(--color-secondary);
  margin: 2rem 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid var(--modal-border);
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const Close = styled(IoClose)`
  font-size: 2.5rem;
  cursor: pointer;
`;

export const Table = styled.table`
  margin: 2rem auto 0 auto;
`;

export const Row = styled.tr``;

export const HeaderTable = styled.thead``;

export const CellHeader = styled.th`
  background: var(--color-primary);
  color: #FFFFFF;
  padding: 0.5rem;
  border-radius: 0.3rem;
`;

export const BodyTable = styled.tbody``;

export const CellData = styled.td`
  color: var(--color-secondary);
  font-size: 1.2rem;
  text-align: center;
  padding: 0.1rem 2rem;
  border: 0.1rem solid var(--color-primary);
  border-radius: 0.3rem;
`;

export const Footer = styled.div`
  margin: 2rem 6rem;
  padding: 2rem 0;
  border-top: 0.1rem solid var(--modal-border);
  display: flex;
  justify-content: right;
  gap: 2rem;
`;

export const Button = styled.button`
  text-transform: uppercase;
  width: 11rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &.cancelButton {
    border: 0.1rem solid var(--color-secondary);
    color: var(--color-secondary);    
  }

  &.selectButton {
    background: var(--color-primary);
    color: #FFFFFF;
  }

  &:hover {
    background: var(--color-secondary);
    color: var(--color-auxiliar);
  }
`;