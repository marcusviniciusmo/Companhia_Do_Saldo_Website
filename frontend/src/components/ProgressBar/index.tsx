import { ProgressBarProps } from "../../types/ProgressBar";
import { Container, Content, Step, Text, Circle, Number, Icon } from "./styles";

export function ProgressBar(props: ProgressBarProps) {
  return (
    <Container>
      <Content>
        {
          props.content?.content.map((step) => {
            return (
              <Step
                key={step.id}
                className={props.content.activeId === step.id
                  ? 'active'
                  : props.content.activeId > step.id
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