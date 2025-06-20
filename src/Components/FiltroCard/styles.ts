import styled from 'styled-components'
import { Props } from '.'

type PropsSemLegendaESemContador = Omit<Props, `contador` | `legenda`>

export const Card = styled.div<PropsSemLegendaESemContador>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  background-color: ${(props) => (props.ativo ? '#ffffff' : '#fcfcfc')};
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
