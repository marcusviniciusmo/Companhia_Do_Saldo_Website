import styled from 'styled-components';

export const Container = styled.section``;

export const Title = styled.h2``;

export const Text = styled.p``;

export const Figcaption = styled.figcaption`
  background: var(--shadow-color);
  color: #FFFFFF;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  position: absolute;
  top: 0rem;
  opacity: 0;
  transition: opacity 1s;
`;

export const Figure = styled.figure`
  border: 0.8rem solid var(--border-default);
  box-shadow: 0.1rem 0.1rem 0.4rem var(--color-secondary);
  position: relative;

  ${Figcaption}:hover {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
