import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps) {
  if (props.parametro === 'status') {
    switch (props.status) {
      case enums.Status.PENDENTE:
        return variaveis.amarelo
      case enums.Status.CONCLUIDA:
        return variaveis.verde
      default:
        return variaveis.cinza1
    }
  } else if (props.parametro === 'prioridade') {
    switch (props.prioridade) {
      case enums.Prioridade.URGENTE:
        return variaveis.vermelho
      case enums.Prioridade.IMPORTANTE:
        return variaveis.amarelo2
      case enums.Prioridade.NORMAL:
        return variaveis.verde
      default:
        return variaveis.cinza1
    }
  }
}

export const Card = styled.div`
  background-color: ${variaveis.branco2};
  box-shadow: 0px 4px 4px ${variaveis.preto25prct};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 32px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Tag = styled.span<TagProps>`
  color: ${variaveis.branco1};
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => retornaCorDeFundo(props)};
  margin-right: 8px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: ${variaveis.cinza3};
  font-size: 14px;
  line-height: 24px;
  font-family: Roboto Mono, monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid ${variaveis.preto10prct};
  padding-top: 16px;
`
