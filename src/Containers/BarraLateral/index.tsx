import FiltroCard from '../../Components/FiltroCard'
import * as S from './styles'

const barraLateral = () => {
  return (
    <S.BarraLateral>
      <div>
        <S.CampoBusca type="text" placeholder="Pesquisar" />
        <S.Filtros>
          <FiltroCard contador={3} legenda="pendente" />
          <FiltroCard contador={4} legenda="concluidas" />
          <FiltroCard contador={2} legenda="urgentes" />
          <FiltroCard contador={2} legenda="importantes" />
          <FiltroCard contador={3} legenda="normal" />
          <FiltroCard contador={7} legenda="todas" ativo />
        </S.Filtros>
      </div>
    </S.BarraLateral>
  )
}

export default barraLateral
