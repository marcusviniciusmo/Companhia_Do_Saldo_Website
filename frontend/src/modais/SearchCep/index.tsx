import { Select } from '../../components/Select';
import { Input } from '../../components/Input';
import { SearchCepProps } from '../../types/SearchCep';
import { Background, Container, Header, Title, Close, Body, Footer, Button } from './styles';

export function SearchCep(props: SearchCepProps) {
  const close = props.close();

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
            primaryList={[]}
            secondaryList={props.regionsList}
            label='Estado'
            required
          />

          <Select
            primaryList={[]}
            label='Cidade'
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