import styled from "styled-components";

export const Label = styled.label`
  color: var(--select-label-color);
  font-size: 1.6rem;
  line-height: 1;
  position: absolute;
  left: 1.4rem;
  pointer-events: none;
  transform-origin: top left;
  transform: translate(0rem, 2.8rem) scale(1);
  transition: 0.2s cubic-bezier(0, 0, 0.2, 1) 0s;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &:focus-within ${Label} {
    background: var(--background);
    color: var(--color-primary);
    padding-inline: 0.5rem;
    transform: translate(0rem, 1rem) scale(0.8);
    transition: all 0.3s ease-in-out;
  }
`;

export const Field = styled.select`
  background: var(--select-background);
  width: 33.2rem;
  height: 4.2rem;
  margin-block: 1.5rem;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--select-border);
  transition: all 0.3s ease;

  &:hover {
    background: var(--background);
    box-shadow: 0.1rem 0.1rem 0.5rem var(--color-primary);
  }
`;