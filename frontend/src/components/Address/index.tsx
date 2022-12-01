import { useEffect, useState } from "react";
import { ViaCepApi, IbgeApi } from "../../api";
import { Input } from "../Input";
import { Select } from "../Select";
import Icon from '../../assets/address/iconAddress.png';
import { AddressViaCepApiProps, AddressRegionsProps, AddressStatesProps, AddressCitiesProps } from "../../types/Address";
import { SetInput } from "../../utils/Functions";
import { Container, Legend, FieldsetForm } from "../../styles/Form";
import { InputRow } from "../../styles/InputRow";

export function Address() {
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
      <FieldsetForm icon={Icon}>
        <Legend>Endereço do Cliente</Legend>
        <InputRow>
          <Input
            type='text'
            id='fieldCep'
            className="labelFloating"
            label='CEP'
            value={inputCep}
            onChange={() => SetInput(event, setInputCep)}
            clean={() => cleanInputCep}
          />

          <Input
            type='text'
            id='fieldAddress'
            className="labelFloating"
            label='Endereço'
            value={inputAddress}
            onChange={() => SetInput(event, setInputAddress)}
            clean={() => cleanInputAddress}
          />
        </InputRow>

        <InputRow>
          <Input
            type='text'
            id='fieldNumber'
            className="labelFloating"
            label='Número'
            value={inputNumber}
            onChange={() => SetInput(event, setInputNumber)}
            clean={() => cleanInputNumber}
          />

          <Input
            type='text'
            id='fieldComplement'
            className="labelFloating"
            label='Complemento'
            value={inputComplement}
            onChange={() => SetInput(event, setInputComplement)}
            clean={() => cleanInputComplement}
          />
        </InputRow>

        <Input
          type='text'
          id='fieldDistrict'
          className="labelFloating"
          label='Bairro'
          value={inputDistrict}
          onChange={() => SetInput(event, setInputDistrict)}
          clean={() => cleanInputDistrict}
        />

        <Select
          primaryList={statesList}
          secondaryList={regionsList}
          label='Estado'
          value={inputState}
          onChange={() => SetInput(event, setInputState)}
        />

        <Select
          primaryList={citiesList}
          label='Cidade'
          value={inputCity}
          onChange={() => SetInput(event, setInputCity)}
        />
      </FieldsetForm>
    </Container>
  );
};