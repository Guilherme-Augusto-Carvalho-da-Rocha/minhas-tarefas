import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  position: relative;
`

export const MainContainer = styled.main`
  padding: 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Lista = styled.ul`
  list-style: none;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  width: 100%;
  border: 1px solid ${variaveis.cinza4};
  border-radius: 8px;
  color: ${variaveis.cinza4};
  font-weight: bold;
  background-color: ${variaveis.branco1};
`

export const Botao = styled.button`
  color: ${variaveis.branco1};
  background-color: ${variaveis.azulEscurissimo};
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  margin-right: 8px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  text-decoration: none;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export default EstiloGlobal
