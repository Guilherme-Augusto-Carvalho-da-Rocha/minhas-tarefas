import styled from 'styled-components'

export const BarraLateral = styled.aside`
  padding: 16px;
  background-color: #eeeeee;
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;

  margin-top: 12px;
`

export const CampoBusca = styled.input`
  padding: 8px;
  width: 100%;
  border: 1px solid #666666;
  border-radius: 8px;
  color: #666666;
  font-weight: bold;
  background-color: #ffffff;
`
