import { useEffect, useState } from 'react';
import { Select } from '../../components/Select';
import { Input } from '../../components/Input';
import { SetInput } from '../../utils/Functions';
import { SearchCepProps } from '../../types/SearchCep';
import { Background, Container, Header, Title, Close, Body, Footer, Button } from './styles';

export function SearchCep(props: SearchCepProps) {
  const [inputState, setInputState] = useState<string>(props.state);
  const [inputCity, setInputCity] = useState<string>(props.city);

  const setState = props.setState();

  const setCity = props.setCity();

  const close = props.close();

  useEffect(() => {
    handleInputState();
  }, [inputState]);

  useEffect(() => {
    handleInputCity();
  }, [inputCity]);

  const handleInputState = () => {
    setState(inputState);
  };

  const handleInputCity = () => {
    setCity(inputCity);
  };

  return (
    <Background>
      <Container>
        <Header>
          <Title>Buscar CEP</Title>

          <Close
            title='Fechar'
            onClick={() => close()}
          />
        </Header>

        <Body>
          <Select
            primaryList={props.statesList}
            secondaryList={props.regionsList}
            label='Estado'
            value={inputState}
            onChange={() => SetInput(event, setInputState)}
            required
          />

          <Select
            primaryList={props.citiesList}
            label='Cidade'
            value={inputCity}
            onChange={() => SetInput(event, setInputCity)}
            required
          />

          <Input
            type='text'
            id='fieldAddressModal'
            className='labelFloating'
            label='Endereço'
            maxLength={100}
            clean={() => { }}
            required
          />
        </Body>

        <Footer>
          <Button
            className='cancelButton'
            onClick={() => close()}
            >
            Cancelar
          </Button>

          <Button
            className='searchButton'
          >
            Buscar
          </Button>
        </Footer>
      </Container>
    </Background>
  );
};