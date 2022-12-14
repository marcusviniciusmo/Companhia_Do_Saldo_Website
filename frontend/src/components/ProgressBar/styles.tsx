import styled, { keyframes } from "styled-components";

export const StepCompleted = keyframes`
  100% {
    transform: scaleX(1);
  };
`;

export const Container = styled.div`
  background: var(--background);
  text-align: center;
  border-radius: 0.5rem;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1rem 3.5rem;
`;

export const Content = styled.div`
  display: flex;
  margin: 4rem 0rem;
  user-select: none;
`;

export const Text = styled.p`
  color: var(--color-secondary);
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
  transition: 0.2s;
`;

export const Number = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Circle = styled.div`
  border: 0.1rem solid var(--color-secondary);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.6rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  transition: 0.2s;

  &::before,
  &::after {
    content: '';
    background: var(--color-secondary);
    width: 14rem;
    height: 0.3rem;
    position: absolute;
    bottom: 1.1rem;
    right: -15rem;
  }
`;

export const Icon = styled.div`
  color: var(--color-secondary);
  opacity: 0;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translatey(-50%);
  transform: translateX(-50%);
`;

export const Step = styled.div`
  text-align: center;
  width: 100%;
  position: relative;

  &.active {
    color: var(--color-primary);

    ${Text} {
      color: var(--color-primary);
      transition: 0.2s linear;
    }

    ${Circle} {
      background: #FFFFFF;
      border-color: var(--color-primary);
    }

    ${Number} {
      display: none;
    }

    ${Icon} {
      opacity: 1;
    }
  }

  &.completed {
    ${Circle},
    ${Circle}::after {
      background: var(--color-auxiliar);
      color: var(--color-primary);
      transform: scaleX(0);
      transform-origin: left;
      animation: ${StepCompleted} 0.7s linear forwards;
    }

    ${Number} {
      display: none;
    }

    ${Icon} {
      opacity: 1;
    }
  }

  &:last-child ${Circle} {
    &::before,
    &::after {
      display: none;
    }
  }
`;