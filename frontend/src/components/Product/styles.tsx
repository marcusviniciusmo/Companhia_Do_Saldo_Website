import styled from "styled-components";
import * as Checkbox from '@radix-ui/react-checkbox';

export const ColorArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Span = styled.span``;

export const Color = styled.img`
  margin-left: 3rem;
  width: 8rem;
  height: 3rem;
  border-radius: 1rem;
  border: 0.2rem solid #FFFFFF;
`;

export const CheckboxArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 8rem;
  left: 6rem;
`;

export const Check = styled(Checkbox.Root)`
  background: #FFFFFF;
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.1rem 0.2rem var(--shadow-color);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0.1rem 0.5rem var(--color-secondary);
  }
`;

export const Indicator = styled(Checkbox.Indicator)`
  font-size: 2rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  cursor: pointer;
  user-select: none;
`;