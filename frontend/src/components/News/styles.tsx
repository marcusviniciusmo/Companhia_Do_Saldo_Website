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

export const Image = styled.img`
  border: 0.5rem solid #FFFFFF;
  box-shadow: 0.1rem 0.1rem 0.4rem var(--color-primary);
  width: 20%;
`;

export const TitleItem = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Items = styled.div`
  margin-block: 1.5rem;
  padding-inline: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 0.1rem solid #FFFFFF;
    box-shadow: 0.1rem 0.1rem 0.3rem var(--color-secondary);
    box-sizing: border-box;

    ${Image} {
      opacity: 0.5;
    }

    ${TitleItem} {
      text-decoration: underline;
    }
  }
`;

export const Row = styled.p`
  margin-left: 1rem;
  display: flex;
  flex-direction: column-reverse;
`;

export const Date = styled.span`
  font-size: 1rem;
  display: flex;
  justify-content: right;
`;