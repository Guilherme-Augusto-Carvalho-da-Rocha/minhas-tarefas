import { useSelector } from 'react-redux'
import Tarefa from '../../Components/Tarefa'
import { MainContainer, Titulo, Lista } from '../../styles'

// import * as enums from '../../utils/enums/tarefa'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtros
  )

  const pesquisaTarefa = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }

    if (criterio === 'prioridade') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.prioridade === valor
      )
    } else if (criterio === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.status === valor
      )
    }

    return tarefasFiltradas
  }

  const tarefas = pesquisaTarefa()

  const exibeResultadoFiltragem = () => {
    let mensagem = `${tarefas.length} tarefa(s) marcada(s) como: `
    if (criterio === 'todas') {
      mensagem += `todas`
    } else {
      mensagem += `${criterio} = ${valor}`
    }
    mensagem += `${
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ``
    }`
    return mensagem
  }

  return (
    <MainContainer>
      <Titulo as="p">{exibeResultadoFiltragem()}</Titulo>
      <Lista>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              descricao={t.descricao}
            />
          </li>
        ))}
      </Lista>
    </MainContainer>
  )
}

export default ListaDeTarefas
