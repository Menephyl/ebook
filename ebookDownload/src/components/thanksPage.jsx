import React from 'react';
import styled from 'styled-components';
// Importe a imagem do livro do seu diretório de assets
import bookCover from '../assets/ebook-cover.png';
import book from '../assets/manual.pdf'

// --- Componentes Estilizados ---

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.darkBlue};
  color: ${({ theme }) => theme.lightGold};
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto; /* Conteúdo principal ocupa o espaço, rodapé no final */
  place-items: center; /* Centraliza horizontalmente e verticalmente */
  padding: 2rem;
  text-align: center;
`;

const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 600px;
`;

const MainTitle = styled.h1`
  font-family: 'Lora', serif; // Fonte serifada elegante
  color: ${({ theme }) => theme.gold};
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.2rem; /* Fonte um pouco menor em telas pequenas */
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.lightGold};
  margin: 0;
  max-width: 80%;
`;

const BookImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 8px;
  border: 3px solid ${({ theme }) => theme.gold};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  margin-top: 1rem;
`;

const DownloadSection = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const DownloadTitle = styled.h3`
  font-family: 'Lora', serif;
  color: ${({ theme }) => theme.gold};
  font-size: 1.5rem;
  margin: 0;
`;

const DownloadButton = styled.a`
  background-color: ${({ theme }) => theme.gold};
  color: ${({ theme }) => theme.textOnGold};
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(218, 165, 32, 0.4);
  }
`;

const Footer = styled.footer`
  margin-top: 3rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.lightGold};
  opacity: 0.7;
`;


// --- Componente Principal ---

const ThankYouPage = () => {
  // Substitua '#' pelo link real do seu arquivo PDF
  const bookFileUrl = book; 

  return (
    <PageWrapper>
      <ContentContainer>
        <MainTitle>Obrigado pela sua compra!</MainTitle>
        
        <SubTitle>
          Seu pedido do 'Manual da Vida Moderna' foi confirmado com sucesso.
        </SubTitle>

        <BookImage src={bookCover} alt="Capa do livro Manual da Vida Moderna" />

        <DownloadSection>
          <DownloadTitle>Seu Download Está Pronto</DownloadTitle>
          <DownloadButton href={bookFileUrl} download>
            Baixar o Livro (PDF)
          </DownloadButton>
        </DownloadSection>

      </ContentContainer>
      <Footer>
        Em caso de dúvidas, entre em contato com o suporte.
      </Footer>
    </PageWrapper>
  );
};

export default ThankYouPage;
