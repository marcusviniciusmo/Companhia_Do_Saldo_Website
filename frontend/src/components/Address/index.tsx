import { useEffect, useState } from "react";
import { ViaCepApi, IbgeApi } from "../../api";
import { Input } from "../Input";
import { Select } from "../Select";
import { AddressViaCepApiProps, AddressProps, AddressRegionsProps, AddressStatesProps, AddressCitiesProps } from "../../types/Address";
import { MockedData } from "../../mocks/Address";
import { SetInput } from "../../utils/Functions";
import { Container, Legend, FieldsetForm, InputRow } from "../../styles/Form";

export function Address() {
  const [mockedData, setMockedData] = useState<AddressProps>();
  const [inputCep, setInputCep] = useState<string>('');
  const [inputAddress, setInputAddress] = useState<string>('');
  const [inputNumber, setInputNumber] = useState<string>('');
  const [inputComplement, setInputComplement] = useState<string>('');
  const [inputDistrict, setInputDistrict] = useState<string>('');
  const [inputState, setInputState] = useState<string>('');
  const [inputCity, setInputCity] = useState<string>('');
  const [regionsList, setRegionsList] = useState<AddressRegionsProps[]>([]);
  const [statesList, setStatesList] = useState<AddressStatesProps[]>([]);
  const [citiesList, setCitiesList] = useState<AddressCitiesProps[]>([]);

  const cleanInputCep = () => setInputCep('');

  const cleanInputAddress = () => setInputAddress('');

  const cleanInputNumber = () => setInputNumber('');

  const cleanInputComplement = () => setInputComplement('');

  const cleanInputDistrict = () => setInputDistrict('');

  const fillInputsByCep = (data: AddressViaCepApiProps) => {
    setInputCep(data.cep);
    setInputAddress(data.logradouro);
    setInputDistrict(data.bairro);
    setInputState(data.uf);
    setInputCity(data.localidade);
  };

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  useEffect(() => {
    if (inputCep.length === 8) {
      ViaCepApi.get(`${inputCep}/json/`)
        .then((response) => {
          fillInputsByCep(response.data);
        });
    };
  }, [inputCep]);

  useEffect(() => {
    IbgeApi.get('/regioes?orderBy=nome')
      .then((response) => {
        setRegionsList(response.data);
      });
  }, []);

  useEffect(() => {
    IbgeApi.get('/estados?orderBy=nome')
      .then((response) => {
        setStatesList(response.data);
      })
  }, []);

  useEffect(() => {
    IbgeApi.get(`estados/${inputState}/municipios?orderBy=nome`)
      .then((response) => {
        setCitiesList(response.data);
      });
  }, [inputState]);

  return (
    <Container method='POST'>
      <FieldsetForm icon={mockedData?.icon!}>
        <Legend>{mockedData?.legend}</Legend>
        <InputRow>
          <Input
            type={mockedData?.inputs[0].type}
            id={mockedData?.inputs[0].id}
            className={mockedData?.inputs[0].className}
            label={mockedData?.inputs[0].label}
            value={inputCep}
            onChange={() => SetInput(event, setInputCep)}
            clean={() => cleanInputCep}
          />

          <Input
            type={mockedData?.inputs[1].type}
            id={mockedData?.inputs[1].id}
            className={mockedData?.inputs[1].className}
            label={mockedData?.inputs[1].label}
            value={inputAddress}
            onChange={() => SetInput(event, setInputAddress)}
            clean={() => cleanInputAddress}
          />
        </InputRow>

        <InputRow>
          <Input
            type={mockedData?.inputs[2].type}
            id={mockedData?.inputs[2].id}
            className={mockedData?.inputs[2].className}
            label={mockedData?.inputs[2].label}
            value={inputNumber}
            onChange={() => SetInput(event, setInputNumber)}
            clean={() => cleanInputNumber}
          />

          <Input
            type={mockedData?.inputs[3].type}
            id={mockedData?.inputs[3].id}
            className={mockedData?.inputs[3].className}
            label={mockedData?.inputs[3].label}
            value={inputComplement}
            onChange={() => SetInput(event, setInputComplement)}
            clean={() => cleanInputComplement}
          />
        </InputRow>

        <Input
          type={mockedData?.inputs[4].type}
          id={mockedData?.inputs[4].id}
          className={mockedData?.inputs[4].className}
          label={mockedData?.inputs[4].label}
          value={inputDistrict}
          onChange={() => SetInput(event, setInputDistrict)}
          clean={() => cleanInputDistrict}
        />

        <Select
          primaryList={statesList}
          secondaryList={regionsList}
          label={mockedData!?.selects[0].label}
          value={inputState}
          onChange={() => SetInput(event, setInputState)}
        />

        <Select
          primaryList={citiesList}
          label={mockedData!?.selects[1].label}
          value={inputCity}
          onChange={() => SetInput(event, setInputCity)}
        />
      </FieldsetForm>
    </Container>
  );
};