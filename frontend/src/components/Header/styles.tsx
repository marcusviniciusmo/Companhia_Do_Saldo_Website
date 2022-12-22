import styled from 'styled-components';

export const Container = styled.header`
  background: linear-gradient(90deg,
    var(--color-secondary) 1%,
    var(--color-primary) 13%,
    var(--color-secondary) 100%);
  border: 0.1rem solid var(--color-primary);
  height: 25rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: left;
`;

export const Title = styled.h1`
  color: var(--color-auxiliar);
  font-size: 3rem;
  text-shadow: 0.5rem 0.5rem 0.5rem var(--shadow-color);
`;

export const Image = styled.img`
  width: 31.5rem;
`;

export const Icon = styled.img`
  width: 17rem;
  height: 17rem;
  position: absolute;
  top: 8rem;
  left: 110rem;
`;