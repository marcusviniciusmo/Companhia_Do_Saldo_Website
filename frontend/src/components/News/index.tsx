import { Container, Header, HGroup, Title, Subtitle, Text } from './styles';

export function News() {
  return (
    <Container>
      <h1>NEWS Component</h1>

      <Header>
        <HGroup>
          <Text>Novidades!</Text>
          <Title>Não perca essas novidades!!</Title>
          <Subtitle>por Marcus Vinícius</Subtitle>
          <Text right>Atualizado em 23 / 11 / 2022</Text>
          <h3>AQUI VAI UMA IMAGEM</h3>
        </HGroup>
      </Header>
    </Container>
  );
};