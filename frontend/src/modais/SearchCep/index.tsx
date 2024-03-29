import { useEffect, useState } from 'react';
import { ViaCepApi } from '../../api';
import { Select } from '../../components/Select';
import { Input } from '../../components/Input';
import { ResultCep } from '../ResultCep';
import { SetInput } from '../../utils/Functions';
import { SearchCepProps, SearchCepMocks, SearchCepListProps } from '../../types/SearchCep';
import { MockedData } from '../../mocks/SearchCep';
import { Background } from '../../styles/Modal';
import { Container, Header, Title, Close, Body, Footer, Button } from './styles';

export function SearchCep(props: SearchCepProps) {
  const [mockedData, setMockedData] = useState<SearchCepMocks>();
  const [inputState, setInputState] = useState<string>(props.state);
  const [inputCity, setInputCity] = useState<string>(props.city);
  const [inputAddress, setInputAddress] = useState<string>(props.address);
  const [cepList, setCepList] = useState<SearchCepListProps[]>([]);
  const [openModalResult, setOpenModalResult] = useState<boolean>(false);

  const setState = props.setState();

  const setCity = props.setCity();

  const setAddress = props.setAddress();

  const setCep = props.setCep();

  const close = props.close();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  useEffect(() => {
    handleInputState();
  }, [inputState]);

  useEffect(() => {
    handleInputCity();
  }, [inputCity]);

  useEffect(() => {
    handleInputAddress();
  }, [inputAddress]);

  const handleInputState = () => setState(inputState);

  const handleInputCity = () => setCity(inputCity);

  const handleInputAddress = () => setAddress(inputAddress);

  const toggleResultModal = () => {
    setOpenModalResult(!openModalResult);
  };

  const getCepByAddress = () => {
    if (inputState && inputCity && inputAddress) {
      ViaCepApi.get(`${inputState}/${inputCity}/${inputAddress}/json/`)
        .then((response) => {
          setCepList(response.data);
          setOpenModalResult(true);
        });
    };
  };

  return (
    <Background>
      <Container>
        <Header>
          <Title>{mockedData?.title}</Title>

          <Close
            title={mockedData?.closeTitle}
            onClick={() => close()}
          />
        </Header>

        <Body>
          <Select
            primaryList={props.statesList}
            secondaryList={props.regionsList}
            label={mockedData!?.selects[0].label}
            value={inputState}
            onChange={() => SetInput(event, setInputState)}
            required
          />

          <Select
            primaryList={props.citiesList}
            label={mockedData!?.selects[1].label}
            value={inputCity}
            onChange={() => SetInput(event, setInputCity)}
            required
          />

          <Input
            type={mockedData?.inputs[0].type}
            id={mockedData?.inputs[0].id}
            className={mockedData?.inputs[0].className}
            label={mockedData?.inputs[0].label}
            maxLength={mockedData?.inputs[0].maxLength}
            value={inputAddress}
            onChange={() => SetInput(event, setInputAddress)}
            clean={() => { }}
            required
          />
        </Body>

        <Footer>
          <Button
            className='cancelButton'
            onClick={() => close()}
          >
            {mockedData?.buttonCancelLabel}
          </Button>

          <Button
            className='searchButton'
            onClick={getCepByAddress}
          >
            {mockedData?.buttonSearchLabel}
          </Button>

          {
            openModalResult &&
            <ResultCep
              cepList={cepList}
              cep={props.cep}
              setCep={() => setCep}
              closeSearchModal={() => close}
              closeResultModal={() => toggleResultModal}
            />
          }
        </Footer>
      </Container>
    </Background>
  );
};