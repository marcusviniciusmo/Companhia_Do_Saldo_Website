import styled from 'styled-components';

export const Nav = styled.nav`
  display: block;
`;

export const Title = styled.h1`
  display: none;
`;

export const Options = styled.ul`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: -2rem;
  left: 60rem;
`;


export const Option = styled.li`
  background: var(--color-primary);
  color: var(--color-auxiliar);
  font-weight: bold;
  border-radius: 0.5rem;
  margin: 0.2rem;
  padding: 1rem;
  display: inline-block;
  text-transform: uppercase;
  list-style: none;
  transition: background 0.4s;

  &:hover {
    background: var(--color-secondary);
    text-decoration: underline;
  }
`;