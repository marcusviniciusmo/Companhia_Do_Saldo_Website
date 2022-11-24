import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 1rem var(--shadow-color);
`;

export const View = styled.iframe`
  width: 100%;
  height: 50rem;
  border: none;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-sizing: border-box;
`;
