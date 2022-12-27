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

export const ButtonAdd = styled.button`
  color: var(--color-primary);
  font-size: 2.2rem;
  margin-left: 4rem;
  border: 0.1rem solid var(--color-secondary);
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background: var(--color-secondary);
    color: var(--color-auxiliar);
  }
`;

export const Added = styled.span`
  font-size: 1.5rem;
  margin-left: 2rem;
`;

export const List = styled.div`
  width: 60%;
  height: 15rem;
  margin-top: 0.5rem;
  overflow: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CheckboxArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: -14rem;
  left: 23rem;
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