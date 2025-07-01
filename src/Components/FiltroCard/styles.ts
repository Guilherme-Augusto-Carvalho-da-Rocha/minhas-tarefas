import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  $ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid
    ${(props) => (props.$ativo ? variaveis.azul : variaveis.cinza2)};
  color: ${(props) => (props.$ativo ? variaveis.azul : variaveis.cinza5)};
  background-color: ${(props) =>
    props.$ativo ? variaveis.branco1 : variaveis.branco2};
  border-radius: 8px;
  :hover {
    cursor: pointer;
  }
`
export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`
export const Label = styled.span`
  font-size: 14px;
  display: block;
`
