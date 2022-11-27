import styled from 'styled-components';

export const Label = styled.label``;

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
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
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
    width: 30rem;
    cursor: pointer;
  }
`;