import { useDispatch, useSelector } from 'react-redux'

import FiltroCard from '../../Components/FiltroCard'
import * as S from './styles'
import { Campo } from '../../styles'
import { RootReducer } from '../../store'
import { trocaTermo } from '../../store/reducers/filtros'
import * as enums from '../../utils/enums/tarefa'
import { useNavigate } from 'react-router-dom'

type Props = {
  main: boolean
}

const BarraLateral = ({ main }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtros)

  return (
    <S.BarraLateral>
      {main ? (
        <div>
          <Campo
            type="text"
            placeholder="Pesquisar"
            value={termo}
            onChange={(e) => dispatch(trocaTermo(e.target.value))}
          />
          <S.Filtros>
            <FiltroCard
              criterio="status"
              legenda={'pendentes'}
              valor={enums.Status.PENDENTE}
            />
            <FiltroCard
              criterio="status"
              legenda={'concluidas'}
              valor={enums.Status.CONCLUIDA}
            />
            <FiltroCard
              criterio="prioridade"
              legenda={'urgentes'}
              valor={enums.Prioridade.URGENTE}
            />
            <FiltroCard
              criterio="prioridade"
              legenda={'importantes'}
              valor={enums.Prioridade.IMPORTANTE}
            />
            <FiltroCard
              criterio="prioridade"
              legenda={'normal'}
              valor={enums.Prioridade.NORMAL}
            />
            <FiltroCard criterio="todas" legenda={'todas'} />
          </S.Filtros>
        </div>
      ) : (
        <>
          <S.BotaoVoltar onClick={() => navigate('/')}>
            Retornar para a lista de tarefas
          </S.BotaoVoltar>
        </>
      )}
    </S.BarraLateral>
  )
}

export default BarraLateral
