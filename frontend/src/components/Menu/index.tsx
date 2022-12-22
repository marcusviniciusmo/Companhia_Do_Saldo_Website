import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuProps } from '../../types/Menu';
import { MockedData } from '../../mocks/Menu';
import { Nav, Title, Options, Option } from './styles';

type Props = {
  onMouseEnter: Function;
  onMouseLeave: Function;
};

export function Menu(props: Props) {
  const [mockedData, setMockedData] = useState<MenuProps[]>([]);

  const onMouseEnter = props.onMouseEnter();
  const onMouseLeave = props.onMouseLeave();

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Nav>
      <Title>Menu Principal</Title>

      <Options>
        {
          mockedData.map((option) => {
            return (
              <Link
                to={option.to}
                key={option.id}
                onMouseEnter={() => onMouseEnter(option)}
                onMouseLeave={() => onMouseLeave()}
              >
                <Option>{option.label}</Option>
              </Link>
            )
          })
        }
      </Options>
    </Nav>
  );
};