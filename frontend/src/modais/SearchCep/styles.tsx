import styled from "styled-components";
import { IoClose } from 'react-icons/io5';

export const Container = styled.div`
  background: var(--background);
  width: 70rem;
  height: 40rem;
  margin: auto;
  border-radius: 0.5rem;
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

export const Body = styled.div`
  width: 40rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.div`
  width: 33rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 1rem;
`;

export const Button = styled.button`
  text-transform: uppercase;
  width: 11rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;

  &.cancelButton {
    border: 0.1rem solid var(--color-secondary);
    color: var(--color-secondary);    
  }

  &.searchButton {
    background: var(--color-primary);
    color: #FFFFFF;
  }

  &:hover {
    background: var(--color-secondary);
    color: var(--color-auxiliar);
  }
`;