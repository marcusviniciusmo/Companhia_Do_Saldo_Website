import { Input } from '../../components/Input';
import { ResultCepProps } from '../../types/ResultCep';
import { Background } from '../../styles/Modal';
import { Container } from './styles';

export function ResultCep(props: ResultCepProps) {
  return (
    <Background>
      <Container>
        <h1>RESULT CEP Modal</h1>

        <table>
          <thead>
            <tr>
              <th></th>
              <th>Logradouro</th>
              <th>Complemento</th>
              <th>Localidade</th>
              <th>CEP</th>
            </tr>
          </thead>

          <tbody>
            {
              props.cepList.map((cepItem) => {
                return (
                  <tr key={cepItem.cep}>
                    <td><Input type='radio' name='cepItem'/></td>
                    <td>{cepItem.logradouro}</td>
                    <td>{cepItem.complemento}</td>
                    <td>{`${cepItem.bairro} - ${cepItem.localidade} / ${cepItem.uf}`}</td>
                    <td>{cepItem.cep}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </Container>
    </Background>
  );
};