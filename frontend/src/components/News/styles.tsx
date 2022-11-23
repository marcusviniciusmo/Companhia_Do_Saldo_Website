import styled from 'styled-components';
import { NewsTextProps } from '../../types/News';

export const Container = styled.article``;

export const Header = styled.header``;

export const HGroup = styled.hgroup``;

export const Title = styled.h1`
  background: var(--color-secondary);
  color: #FFFFFF;
  font-size: 3.5rem;
  text-align: center;
  margin-block: 0rem;
`;

export const Subtitle = styled.h2`
  color: var(--color-secondary);
  font-size: 1.5rem;
  margin-top: 0rem;
`;

export const Text = styled.h3<NewsTextProps>`
  color: var(--color-primary);
  font-size: 1.2rem;
  text-align: ${(props) => props.right && 'right'};
  margin-top: 0rem;
`;
