import { useEffect, useState } from "react";
import { Input } from "../Input";
import { IdentificationProps } from "../../types/Identification";
import { MockedData } from "../../mocks/Identification";
import Icon from '../../assets/identification/icon.png';
import { SetInput } from "../../utils/Functions";
import { Container, Legend, FieldsetForm, InputRow } from "../../styles/Form";
import { FieldsetGender, Gender } from "./styles";

export function Identification() {
  const [mockedData, setMockedData] = useState<IdentificationProps>();
  const [inputCpf, setInputCpf] = useState<string>('');
  const [inputPhone, setInputPhone] = useState<string>('');
  const [inputName, setInputName] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [, setInputGender] = useState<string>('');
  const [inputBirthday, setInputBirthday] = useState<string>('');
  
  const onlyNumbersInInput = true;

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  const cleanInputCpf = () => {
    setInputCpf('');
    setInputPhone('');
    setInputName('');
    setInputEmail('');
    setInputBirthday('');
  };
  
  const cleanInputPhone = () => setInputPhone('');

  const cleanInputName = () => setInputName('');

  const cleanInputEmail = () => setInputEmail('');

  const cleanInputBirthday = () => setInputBirthday('');

  return (
    <Container method='POST'>
      <FieldsetForm icon={Icon}>
        <Legend>{mockedData?.legend}</Legend>
        <InputRow>
          <Input
            type={mockedData?.inputs[0].type}
            id={mockedData?.inputs[0].id}
            className={mockedData?.inputs[0].className}
            label={mockedData!?.inputs[0].label}
            maxLength={mockedData?.inputs[0].maxLength}
            value={inputCpf}
            onChange={() => SetInput(event, setInputCpf, onlyNumbersInInput)}
            clean={() => cleanInputCpf}
            required
          />

          <Input
            type={mockedData?.inputs[1].type}
            id={mockedData?.inputs[1].id}
            className={mockedData?.inputs[1].className}
            label={mockedData!?.inputs[1].label}
            maxLength={mockedData?.inputs[1].maxLength}
            value={inputPhone}
            onChange={() => SetInput(event, setInputPhone, onlyNumbersInInput)}
            clean={() => cleanInputPhone}
            required
          />
        </InputRow>

        <InputRow>
          <Input
            type={mockedData?.inputs[2].type}
            id={mockedData?.inputs[2].id}
            className={mockedData?.inputs[2].className}
            label={mockedData!?.inputs[2].label}
            value={inputName}
            onChange={() => SetInput(event, setInputName)}
            clean={() => cleanInputName}
            required
          />

          <Input
            type={mockedData?.inputs[3].type}
            id={mockedData?.inputs[3].id}
            className={mockedData?.inputs[3].className}
            label={mockedData!?.inputs[3].label}
            value={inputEmail}
            onChange={() => SetInput(event, setInputEmail)}
            clean={() => cleanInputEmail}
          />
        </InputRow>

        <FieldsetGender>
          <Legend>{mockedData?.subLegend[0]}</Legend>
          <Gender>
            <Input
              type={mockedData?.inputs[4].type}
              id={mockedData?.inputs[4].id}
              name={mockedData?.inputs[4].name}
              className={mockedData?.inputs[4].className}
              label={mockedData!?.inputs[4].label}
              value={mockedData?.inputs[4].value}
              onChange={() => SetInput(event, setInputGender)}
            />
          </Gender>

          <Gender>
            <Input
              type={mockedData?.inputs[5].type}
              id={mockedData?.inputs[5].id}
              name={mockedData?.inputs[5].name}
              className={mockedData?.inputs[5].className}
              label={mockedData!?.inputs[5].label}
              value={mockedData?.inputs[5].value}
              onChange={() => SetInput(event, setInputGender)}
            />
          </Gender>

          <Gender>
            <Input
              type={mockedData?.inputs[6].type}
              id={mockedData?.inputs[6].id}
              name={mockedData?.inputs[6].name}
              className={mockedData?.inputs[6].className}
              label={mockedData!?.inputs[6].label}
              value={mockedData?.inputs[6].value}
              onChange={() => SetInput(event, setInputGender)}
            />
          </Gender>
        </FieldsetGender>

        <Input
          type={mockedData?.inputs[7].type}
          id={mockedData?.inputs[7].id}
          className={mockedData?.inputs[7].className}
          label={mockedData!?.inputs[7].label}
          maxLength={mockedData?.inputs[7].maxLength}
          value={inputBirthday}
          onChange={() => SetInput(event, setInputBirthday, onlyNumbersInInput)}
          clean={() => cleanInputBirthday}
          required
        />
      </FieldsetForm>
    </Container>
  );
};