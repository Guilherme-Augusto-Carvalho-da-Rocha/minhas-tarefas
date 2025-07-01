import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const CirculoLink = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  font-size: 40px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  background-color: ${variaveis.verde};
  color: ${variaveis.branco1};
  position: fixed;
  bottom: 40px;
  right: 40px;
`
