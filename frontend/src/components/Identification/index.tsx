import { useEffect, useState } from "react";
import { Input } from "../Input";
import { IdentificationProps } from "../../types/Identification";
import { MockedData } from "../../mocks/Identification";
import { SetInput } from "../../utils/Functions";

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
    <>
      <h1>IDENTIFICATION Component</h1>

      <form>
        <h3>{mockedData?.legend}</h3>
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

        <h4>{mockedData?.subLegeng[0]}</h4>
        <Input
          type={mockedData?.inputs[4].type}
          id={mockedData?.inputs[4].id}
          name={mockedData?.inputs[4].name}
          className={mockedData?.inputs[4].className}
          label={mockedData!?.inputs[4].label}
          value={mockedData?.inputs[4].value}
          onChange={() => SetInput(event, setInputGender)}
        />

        <Input
          type={mockedData?.inputs[5].type}
          id={mockedData?.inputs[5].id}
          name={mockedData?.inputs[5].name}
          className={mockedData?.inputs[5].className}
          label={mockedData!?.inputs[5].label}
          value={mockedData?.inputs[5].value}
          onChange={() => SetInput(event, setInputGender)}
        />

        <Input
          type={mockedData?.inputs[6].type}
          id={mockedData?.inputs[6].id}
          name={mockedData?.inputs[6].name}
          className={mockedData?.inputs[6].className}
          label={mockedData!?.inputs[6].label}
          value={mockedData?.inputs[6].value}
          onChange={() => SetInput(event, setInputGender)}
        />

        <Input
          type={mockedData?.inputs[7].type}
          id={mockedData?.inputs[7].id}
          className={mockedData?.inputs[7].className}
          label={mockedData!?.inputs[7].label}
          value={inputBirthday}
          onChange={() => SetInput(event, setInputBirthday)}
          clean={() => cleanInputBirthday}
        />
      </form>
    </>
  );
};