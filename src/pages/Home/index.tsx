import BotaoAdicionar from '../../Components/BotaoAdicionar'
import BarraLateral from '../../Containers/BarraLateral'
import ListaDeTarefas from '../../Containers/ListaDeTarefas'

const Home = () => {
  return (
    <>
      <BarraLateral main={true} />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
