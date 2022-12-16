import styled from "styled-components";
import { FieldsetProps } from "../../types/Form";

export const Container = styled.form`
  width: 72rem;
  margin: auto;
  
  fieldset {
    margin-block: 0rem;
    border-color: #FFFFFF;
    border-radius: 1rem;
  }
`;

export const Legend = styled.legend`
  color: var(--color-secondary);
  font-size: 1.5rem;
  font-weight: bold;
  padding-inline: 1.0rem;
`;

export const FieldsetForm = styled.fieldset<FieldsetProps>`
  background: url(${(props) => props.icon}) no-repeat 95% 95%;
  min-height: 35rem;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  background: var(--color-primary);
  color: #FFFFFF;
  font-size: 1.5rem;
  width: 12rem;
  height: 3.5rem;
  margin-block: 2rem;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 1rem;
  float: right;
  cursor: pointer;

  &:hover {
    background: var(--color-secondary);
    color: var(--color-auxiliar)
  }
`;