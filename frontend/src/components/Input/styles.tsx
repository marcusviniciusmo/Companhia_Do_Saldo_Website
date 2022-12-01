import styled from 'styled-components';

export const Label = styled.label`
  margin-inline: 0.3rem;
`;

export const Container = styled.div`
  &.labelFloating {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  &.labelFloating ${Label} {
    color: var(--input-label-color);
    font-size: 1.6rem;
    line-height: 1;
    position: absolute;
    left: 1.4rem;
    pointer-events: none;
    transform-origin: top left;
    transform: translate(0rem, 2.9rem) scale(1);
    transition: 0.2s cubic-bezier(0, 0, 0.2, 1) 0s;
  }

  &.labelFloating:focus-within ${Label},
  ${Label}.labelFloating.filled {
    background: var(--background);
    color: var(--color-primary);
    padding-inline: 0.5rem;
    transform: translate(0rem, 1rem) scale(0.8);
    transition: all 0.3s ease-in-out;
  }

  &.inputRadio {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &.inputRadio:hover {
    color: var(--color-primary);
  }

  &.inputRange {
    margin-top: 4rem;
    padding-inline: 1rem;
    display: flex;
    flex-direction: column-reverse;
    gap: 1.5rem;

    &:hover ${Label}{
      color: var(--color-primary);
      font-weight: bold;
      opacity: 0.5;
    }
  }
`;


export const Field = styled.input`
  &.labelFloating {
    width: 30rem;
    min-height: 2rem;
    margin-block: 1.5rem;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    border: 0.1rem solid var(--input-border);
    transition: all 0.3s ease;
  }

  &.labelFloating:hover {
    background: var(--background);
    box-shadow: 0.1rem 0.1rem 0.5rem var(--color-primary);
  }

  &.inputRadio {
    zoom: 1.5;
    cursor: pointer;
  }

  &.inputRange {
    width: 25rem;
    cursor: pointer;
  }
`;

export const Close = styled.div`
  display: none;

  &.labelFloating.showClose {
    font-size: 2rem;
    display: block;
    position: absolute;
    top: 2.7rem;
    left: 31.5rem;
    transform: translate(-50%);
    box-sizing: border-box;
    transition: all 0.4s ease-in-out;
  }

  &.labelFloating.showClose:hover {
    color: var(--color-primary);
    cursor: pointer;
  }
`;