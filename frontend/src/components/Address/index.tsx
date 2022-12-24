import { useEffect, useState } from "react";
import { ViaCepApi, IbgeApi } from "../../api";
import { Input } from "../Input";
import { Select } from "../Select";
import { SearchCep } from "../../modais/SearchCep";
import { AddressViaCepApiProps, AddressProps, AddressRegionsProps, AddressStatesProps, AddressCitiesProps } from "../../types/Address";
import { MockedData } from "../../mocks/Address";
import { SetInput } from "../../utils/Functions";
import { Container, Legend, FieldsetForm, InputRow } from "../../styles/Form";
import { SearchCepContainer, SearchCepLabel } from "./styles";

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
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onlyNumbersInInput = true;

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

  const fillInputsByCep = (data: AddressViaCepApiProps) => {
    setInputCep(data.cep);
    setInputAddress(data.logradouro);
    setInputDistrict(data.bairro);
    setInputState(data.uf);
    setInputCity(data.localidade);
  };

  const cleanInputCep = () => {
    setInputCep('');
    setInputAddress('');
    setInputNumber('');
    setInputComplement('');
    setInputDistrict('');
    setInputState('');
    setInputCity('');
  };

  const cleanInputAddress = () => setInputAddress('');

  const cleanInputNumber = () => setInputNumber('');

  const cleanInputComplement = () => setInputComplement('');

  const cleanInputDistrict = () => setInputDistrict('');

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Container method='POST'>
      <FieldsetForm icon={mockedData?.icon!}>
        <Legend>{mockedData?.legend}</Legend>
        <SearchCepContainer>
          <SearchCepLabel
            title='Buscar Cep'
            onClick={toggleModal}
          >
            Não sei o meu CEP
          </SearchCepLabel>
        </SearchCepContainer>

        {
          openModal &&
          <SearchCep
            regionsList={regionsList}
            statesList={statesList}
            citiesList={citiesList}
            state={inputState}
            city={inputCity}
            address={inputAddress}
            setState={() => setInputState}
            setCity={() => setInputCity}
            setAddress={() => setInputAddress}
            close={() => toggleModal}
          />
        }

        <InputRow>
          <Input
            type={mockedData?.inputs[0].type}
            id={mockedData?.inputs[0].id}
            className={mockedData?.inputs[0].className}
            label={mockedData?.inputs[0].label}
            maxLength={mockedData?.inputs[0].maxLength}
            value={inputCep}
            onChange={() => SetInput(event, setInputCep, onlyNumbersInInput)}
            clean={() => cleanInputCep}
            required
          />

          <Input
            type={mockedData?.inputs[1].type}
            id={mockedData?.inputs[1].id}
            className={mockedData?.inputs[1].className}
            label={mockedData?.inputs[1].label}
            maxLength={mockedData?.inputs[1].maxLength}
            value={inputAddress}
            onChange={() => SetInput(event, setInputAddress)}
            clean={() => cleanInputAddress}
            required
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
            required
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
          required
        />

        <Select
          primaryList={statesList}
          secondaryList={regionsList}
          label={mockedData!?.selects[0].label}
          value={inputState}
          onChange={() => SetInput(event, setInputState)}
          required
        />

        <Select
          primaryList={citiesList}
          label={mockedData!?.selects[1].label}
          value={inputCity}
          onChange={() => SetInput(event, setInputCity)}
          required
        />
      </FieldsetForm>
    </Container>
  );
};