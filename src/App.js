import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

const ChangeValueButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  font-size: 36px;
  border: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>더하기 빼기</p>
        <span>{count} </span>
        <ButtonWrapper>
          <ChangeValueButton
            aria-label="Increment value"
            onClick={() => setCount(count + 1)}
          >
            +
          </ChangeValueButton>
          <ChangeValueButton
            aria-label="Decreament value"
            onClick={() => setCount(count - 1)}
          >
            -
          </ChangeValueButton>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
