import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto 1.5rem auto;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 1rem var(--shadow-color);
`;

export const View = styled.iframe`
  width: 100%;
  height: 42.5rem;
  border: none;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-sizing: border-box;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 1rem;
`;

export const Button = styled.button`
  background: var(--color-primary);
  color: #FFFFFF;
  font-size: 1.5rem;
  width: 12rem;
  height: 3.5rem;
  margin: 1rem 0.5rem;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background: var(--color-secondary);
    color: var(--color-auxiliar);
  }
`;
