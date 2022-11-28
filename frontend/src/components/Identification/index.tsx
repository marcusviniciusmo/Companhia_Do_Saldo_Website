import { useEffect, useState } from "react";
import { Input } from "../Input";
import { IdentificationProps } from "../../types/Identification";
import { MockedData } from "../../mocks/Identification";
import { SetInput } from "../../utils/Functions";
import { Container, Legend } from "../../styles/Form";
import { FieldsetId, FieldsetGender, Gender } from "./styles";

export function Identification() {
  const [mockedData, setMockedData] = useState<IdentificationProps>();
  const [inputCpf, setInputCpf] = useState<string>('');
  const [inputPhone, setInputPhone] = useState<string>('');
  const [inputName, setInputName] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [, setInputGender] = useState<string>('');
  const [inputBirthday, setInputBirthday] = useState<string>();

  const cleanInputCpf = () => setInputCpf('');

  const cleanInputPhone = () => setInputPhone('');

  const cleanInputName = () => setInputName('');

  const cleanInputEmail = () => setInputEmail('');

  const cleanInputBirthday = () => setInputBirthday('');

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Container
      method='POST'
    >
      <FieldsetId>
        <Legend>{mockedData?.legend}</Legend>
        <Input
          type={mockedData?.inputs[0].type}
          id={mockedData?.inputs[0].id}
          className={mockedData?.inputs[0].className}
          label={mockedData!?.inputs[0].label}
          value={inputCpf}
          onChange={() => SetInput(event, setInputCpf)}
          clean={() => cleanInputCpf}
        />

        <Input
          type={mockedData?.inputs[1].type}
          id={mockedData?.inputs[1].id}
          className={mockedData?.inputs[1].className}
          label={mockedData!?.inputs[1].label}
          value={inputPhone}
          onChange={() => SetInput(event, setInputPhone)}
          clean={() => cleanInputPhone}
        />

        <Input
          type={mockedData?.inputs[2].type}
          id={mockedData?.inputs[2].id}
          className={mockedData?.inputs[2].className}
          label={mockedData!?.inputs[2].label}
          value={inputName}
          onChange={() => SetInput(event, setInputName)}
          clean={() => cleanInputName}
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

        <FieldsetGender>
          <Legend>{mockedData?.subLegeng[0]}</Legend>
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
          value={inputBirthday}
          onChange={() => SetInput(event, setInputBirthday)}
          clean={() => cleanInputBirthday}
        />
      </FieldsetId>
    </Container>
  );
};