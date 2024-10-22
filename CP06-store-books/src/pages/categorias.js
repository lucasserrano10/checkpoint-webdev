import Header from '../component/Header';
import AppContainer from '../component/AppContainer';
import styled from 'styled-components';

const Card = styled.div`
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column; 
  margin: 20px auto; 
  max-width: 600px;
  padding: 40px 30px; 
  justify-content: center;
  width: 80%;
  transition: transform 0.3s; 
  
  &:hover {
    transform: translateY(-5px); /* Efeito de levantar ao passar o mouse */
  }
`;

const Title = styled.h1`
  font-size: 2rem; /* Tamanho do título */
  color: #333; /* Cor do texto */
  margin-bottom: 10px; /* Espaçamento inferior */
`;

const Subtitle = styled.h5`
  font-size: 1.2rem; /* Tamanho do subtítulo */
  color: #666; /* Cor do texto */
  text-align: center; /* Centraliza o subtítulo */
`;

const CardTipos = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column; 
  margin: 20px auto; 
  max-width: 600px;
  padding: 40px 30px; 
  justify-content: center;
  width: 90%;
  transition: transform 0.3s; 
`

const CategoriasTipos = styled.div`
  background-color:#F2935C
  font-size = 18px
  font-weight: bolder;

  &:hover {
    transform: translateY(-5px); 
  }
`

const Categorias = () => {
  return (
    <AppContainer>
      <Header />
      <Card>
        <Title>Gostaria de ver as categorias que temos na loja?</Title>
        <Subtitle>Encontre seu tipo de livro aqui!</Subtitle>
      </Card>
      <CardTipos>
        <CategoriasTipos>
          <Title>ANGULAR</Title>
        </CategoriasTipos>
        <CategoriasTipos>
          <Title>DESIGN</Title>
        </CategoriasTipos>
        <CategoriasTipos>
          <Title>SASS</Title>
        </CategoriasTipos>
        <CategoriasTipos>
          <Title>CSS</Title>
        </CategoriasTipos>
        <CategoriasTipos>
          <Title>HTML</Title>
        </CategoriasTipos>
      </CardTipos>
    </AppContainer>
  );
}

export default Categorias;
