import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuProps } from '../../types/Menu';
import { MockedData } from '../../mocks/Menu';
import { Nav, Title, Options, Option } from './styles';

export function Menu() {
  const [mockedData, setMockedData] = useState<MenuProps[]>([]);

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
              <Link to={option.to} key={option.id}>
                <Option>{option.label}</Option>
              </Link>
            )
          })
        }
      </Options>
    </Nav>
  );
};