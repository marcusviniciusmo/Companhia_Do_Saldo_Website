import styled, { keyframes } from "styled-components";

export const Loading = keyframes`
  0% {
    transform: translateX(0rem);
    opacity: 0;
  }
  35%, 65% {
    transform: translateX(3rem);
    opacity: 1;
  }
  100% {
    transform: translateX(0rem);
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
`;

export const Circle = styled.span`
  background: var(--color-secondary);
  width: 0.5rem;
  height: 0.5rem;
  margin: 0rem 0.2rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  opacity: 0;
  animation: ${Loading} 3s ease-in-out infinite;

  &:nth-child(3) {
    animation-delay: 0.5s;
  }

  &:nth-child(2) {
    animation-delay: 1s;
  }

  &:nth-child(1) {
    animation-delay: 1.5s;
  }
`;