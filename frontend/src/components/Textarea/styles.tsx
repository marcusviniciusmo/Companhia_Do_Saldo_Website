import styled from "styled-components";

export const Label = styled.label`
  color: var(--textarea-label-color);
  font-size: 1.6rem;
  line-height: 1;
  position: absolute;
  left: 1.4rem;
  pointer-events: none;
  transform-origin: top left;
  transform: translate(0rem, 1rem) scale(1);
  transition: 0.2s cubic-bezier(0, 0, 0.2, 1);
`;

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  position: relative;

  &:focus-within ${Label},
  ${Label}.filled {
    background: var(--background);
    color: var(--color-primary);
    margin-bottom: 0.5rem;
    padding-inline: 0.5rem;
    transform: translate(0rem, -0.5rem) scale(0.8);
    transition: all 0.3s ease-in-out;
  }
`;

export const Field = styled.textarea`
  width: 33.5rem;
  height: 15rem;
  padding: 1.5rem;
  border: 0.1rem solid var(--textarea-border);
  border-radius: 0.5rem;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &:hover {
    background: var(--background);
    box-shadow: 0.1rem 0.1rem 0.5rem var(--color-primary);
  }
`;

export const Close = styled.div`
  display: none;

  &.labelFloating.showClose {
    display: block;
    font-size: 2rem;
    position: absolute;
    top: 10%;
    left: 32rem;
    box-sizing: border-box;
    transform: translate(-50%);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      color: var(--color-primary);
    }
  }
`;