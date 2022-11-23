import styled from 'styled-components';

export const Container = styled.footer`
  border-top: 0.1rem solid var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  clear: both;
`;

export const Text = styled.span`
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  text-transform: uppercase;
`;

export const Icons = styled.div`
  margin-block: 1rem;
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

export const Icon = styled.a`
  all: unset;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 0.1rem solid var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.7s;
  cursor: pointer;

  &:hover {
    transform: scale(1.8);
    opacity: 0.5;
  }
`;