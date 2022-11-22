import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuProps } from '../../types/Menu';
import { MockedData } from '../../mocks/Menu';

export function Menu() {
  const [mockedData, setMockedData] = useState<MenuProps[]>([]);

  useEffect(() => {
    setMockedData(MockedData)
  }, []);

  return (
    <>
      <h1>MENU Component</h1>
      <h1>Menu Principal</h1>

      {
        mockedData.map((option) => {
          return (
            <Link to={option.to} key={option.id}>
              <h4>{option.label}</h4>
            </Link>
          )
        })
      }
    </>
  );
};