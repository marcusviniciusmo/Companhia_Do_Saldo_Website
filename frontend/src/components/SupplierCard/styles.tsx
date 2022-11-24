import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  box-shadow: 1rem 1rem 5.3rem 0rem var(--shadow-color);
  transition: all 0.8s ease-in-out;
  z-index: 20;
`;

export const Bottom = styled.div`
  color: #FFFFFF;
  width: 100%;
  height: 100%;
  padding-inline: 1rem;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  transform: translate(100%, -50%);
  z-index: 20;
`;

export const Container = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 2rem;
  border-radius: 2rem;
  box-shadow: 1rem 1rem 5.3rem 0rem var(--shadow-color);
  position: relative;
  float: left;
  overflow: hidden;
  transition: all 0.8s ease-in-out;
  z-index: 0;

  &:hover {
    transform: scale(2.5);
    z-index: 9999;

    ${Image} {
      filter: blur(0.2rem);
      transform: scale(1.5);
      overflow: hidden;
      transition: all 0.8s linear;
    }

    ${Bottom} {
      background: var(--opacity-color-primary);
      transform: translate(0%, -50%);
      transition: all 1.3s ease;
    }
  }
`;

export const Top = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.8s ease-in-out;
  z-index: 1;
`;

export const Title = styled.span`
  color: #FFFFFF;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 4rem;
  letter-spacing: 0.1rem;
  text-align: center;
  display: flex;
`;

export const Text = styled.span`
  font-size: 0.6rem;
  text-align: justify;
  text-indent: 2rem;
  padding-block: 0.5rem;
  display: flex;
`;

export const Button = styled.button`
  background: var(--color-primary);
  color: #FFFFFF;
  font-size: 0.8rem;
  border: none;
  border-radius: 0.3rem;
  padding: 0.3rem 1rem;
  display: flex;
  position: absolute;
  bottom: 2rem;
  cursor: pointer;

  &:hover {
    background: var(--color-secondary);
    color: var(--color-auxiliar);
  }
`;