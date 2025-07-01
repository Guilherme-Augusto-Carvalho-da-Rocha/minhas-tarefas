import styled from 'styled-components'
import { Botao } from '../../styles'
import variaveis from '../../styles/variaveis'

export const BarraLateral = styled.aside`
  padding: 16px;
  background-color: ${variaveis.branco3};
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;

  margin-top: 12px;
`

export const BotaoVoltar = styled(Botao)`
  display: block;
  width: 100%;
  text-align: center;
`
