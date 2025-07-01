import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'
import { salvar, remover, trocaStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../Models/Tarefa'
import { BotaoSalvar, BotaoCancelarRemover, Botao } from '../../styles'

type Props = TarefaClass

const Tarefa = ({
  id,
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  function salvarDescricao() {
    setEstaEditando(false)
    dispatch(
      salvar({
        id,
        titulo,
        prioridade,
        status,
        descricao
      })
    )
  }

  const alteraStatusTarefa = (evento: ChangeEvent<HTMLInputElement>) => {
    dispatch(trocaStatus({ id: id, finalizado: evento.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
          type="checkbox"
          id={titulo}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag prioridade={prioridade} parametro="prioridade">
        {prioridade}
      </S.Tag>
      <S.Tag status={status} parametro="status">
        {status}
      </S.Tag>
      <S.Descricao
        placeholder="Descricao da sua tarefa"
        value={descricao}
        disabled={!estaEditando}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvarDescricao}>Salvar</BotaoSalvar>
            <BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
