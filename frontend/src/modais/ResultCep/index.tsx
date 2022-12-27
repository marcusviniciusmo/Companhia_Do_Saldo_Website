import { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { SetInput } from '../../utils/Functions';
import { ResultCepProps } from '../../types/ResultCep';
import { Background } from '../../styles/Modal';
import { Container, Header, Title, Close, Table, Row, HeaderTable, CellHeader, BodyTable, CellData, Footer, Button } from './styles';

export function ResultCep(props: ResultCepProps) {
  const [inputCep, setInputCep] = useState<string>('');

  const setCep = props.setCep();

  const onlyNumbersInInput = true;

  const closeSearchModal = props.closeSearchModal();

  const closeResultModal = props.closeResultModal();

  useEffect(() => {
    handleInputCep();
  }, [inputCep]);

  const handleInputCep = () => {
    setCep(inputCep);
  };

  const updateAddress = () => {
    handleInputCep();
    closeResultModal();
    closeSearchModal();
  };

  return (
    <Background>
      <Container>
        <Header>
          <Title>CEPs Encontrados</Title>

          <Close
            title='Fechar'
            onClick={() => closeResultModal()}
          />
        </Header>

        <Table>
          <HeaderTable>
            <Row>
              <CellHeader></CellHeader>
              <CellHeader>Logradouro</CellHeader>
              <CellHeader>Complemento</CellHeader>
              <CellHeader>Localidade</CellHeader>
              <CellHeader>CEP</CellHeader>
            </Row>
          </HeaderTable>

          <BodyTable>
            {
              props.cepList.map((cepItem) => {
                return (
                  <Row key={cepItem.cep}>
                    <CellData>
                      <Input
                        type='radio'
                        name='cepItem'
                        value={cepItem.cep}
                        onChange={() => SetInput(event, setInputCep, onlyNumbersInInput)}
                      />
                    </CellData>
                    <CellData>{cepItem.logradouro}</CellData>
                    <CellData>{cepItem.complemento}</CellData>
                    <CellData>
                      {`${cepItem.bairro} - ${cepItem.localidade} / ${cepItem.uf}`}
                    </CellData>
                    <CellData>{cepItem.cep}</CellData>
                  </Row>
                )
              })
            }
          </BodyTable>
        </Table>

        <Footer>
          <Button className='cancelButton'>
            Cancelar
          </Button>

          <Button
            className='selectButton'
            onClick={updateAddress}
          >
            Selecionar
          </Button>
        </Footer>
      </Container>
    </Background>
  );
};