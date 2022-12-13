import { Container, Content, Step, Text, Circle, Number, Icon } from "./styles";
import { BiUser, BiHomeCircle, BiMessage, BiCart } from 'react-icons/bi';

export function ProgressBar() {
  const steps = {
    activeId: 2,
    content: [
      {
        id: 1,
        title: 'Identificação',
        icon: BiUser
      },
      {
        id: 2,
        title: 'Endereço',
        icon: BiHomeCircle
      },
      {
        id: 3,
        title: 'Mensagem',
        icon: BiMessage
      },
      {
        id: 4,
        title: 'Produto',
        icon: BiCart
      },
    ]
  };

  return (
    <Container>
      <Content>
        {
          steps.content.map((step) => {
            return (
              <Step
                key={step.id}
                className={steps.activeId === step.id
                  ? 'active'
                  : steps.activeId > step.id
                    ? 'completed'
                    : ''}>
                <Circle>
                  <Number>{step.id}</Number>

                  <Icon>
                    <step.icon />
                  </Icon>

                </Circle>
                <Text>{step.title}</Text>
              </Step>
            )
          })
        }
      </Content>
    </Container>
  );
};