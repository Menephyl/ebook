import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import ThankYouPage from './components/thanksPage.jsx';
import { theme } from './components/theme.js';

// Define fontes para serem usadas em toda a aplicação
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Roboto:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif; // Fonte padrão sans-serif
    background-color: ${({ theme }) => theme.darkBlue};
    color: ${({ theme }) => theme.lightGold};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <ThankYouPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
