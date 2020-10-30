import React from 'react';
import { Background, Container, CenterContainer} from '../styles/components/header';
import bg from '../assets/bg.svg';

const Header = () => {
  return (
    <CenterContainer>
      <Container>
      <div>
        <h1>Open <span>Food</span> <br />Facts</h1>
      </div>
      <Background>
        <img src={bg} alt="Open Food Facts"/>
      </Background>

    </Container>
    </CenterContainer>

  );
};

export default Header;
