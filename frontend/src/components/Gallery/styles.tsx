import styled from 'styled-components';
import { GalleryItemProps } from '../../types/Gallery';

export const Container = styled.div``;

export const List = styled.ul`
  width: 70rem;
  margin: 0 auto;
  padding: 5rem;
  list-style: none;
  overflow: hidden;
`;

export const Link = styled.a``;

export const Text = styled.span`
  background: var(--shadow-color);
  text-shadow: var(--shadow-color);
  color: #FFFFFF;
  font-size: 1.3rem;
  padding: 0.5rem;
  line-height: 37rem;
  opacity: 0;
`;

export const Item = styled.li<GalleryItemProps>`
  background: url(${(props) => props.id});
  background-position: 50% 50%;
  background-size: 40rem 40rem;
  width: 20rem;
  height: 20rem;
  margin: 1rem;
  border: 0.5rem solid #FFFFFF;
  box-shadow: 0.1rem 0.1rem 0.3rem var(--shadow-color);
  float: left;
  transition: all 0.4s ease-in;

  &:hover {
    background-position: 0rem 0rem;
    background-size: 20rem 20rem;
    transform: scale(1.5);

    ${Text} {
      opacity: 1;
    }
  }
`;
