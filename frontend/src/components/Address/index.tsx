import { useEffect, useState } from "react";
import { ViaCepApi, IbgeApi } from "../../api";
import { Input } from "../Input";
import { Select } from "../Select";
import { AddressViaCepApiProps, AddressRegionsProps, AddressStatesProps, AddressCitiesProps } from "../../types/Address";
import { SetInput } from "../../utils/Functions";

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
    <>
      <h1>ADDRESS Component</h1>

      <form>
        <h3>Endereço do Cliente</h3>
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

        <Input
          type='text'
          id='fieldDistrict'
          className="labelFloating"
          label='Bairro'
          value={inputDistrict}
          onChange={() => SetInput(event, setInputDistrict)}
          clean={() => cleanInputDistrict}
        />

        <h4>Estado:</h4>
        <Select
          primaryList={statesList}
          secondaryList={regionsList}
          value={inputState}
          onChange={() => SetInput(event, setInputState)}
        />

        <h4>Cidade:</h4>
        <Select
          primaryList={citiesList}
          value={inputCity}
          onChange={() => SetInput(event, setInputCity)}
        />
      </form>
    </>
  );
};