import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { trocaFiltro } from '../../store/reducers/filtros'
import * as enums from '../../utils/enums/tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtros, tarefas } = useSelector((state: RootReducer) => state)

  const filtrar = () => {
    dispatch(trocaFiltro({ criterio: criterio, valor: valor }))
  }

  const cardAtivo = () => {
    const ativo = filtros.criterio === criterio && filtros.valor === valor
    return ativo
  }

  const ativo = cardAtivo()

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  return (
    <S.Card $ativo={ativo} onClick={filtrar}>
      <S.Contador>{contarTarefas()}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
