import Tarefa from '../../Components/Tarefa'
import * as S from './styles'

import * as enums from '../../utils/enums/tarefa'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'assistir o modulo correspondente na EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'pagar conta de internet',
    descricao: 'baixar fatura no email',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'ir pra academia',
    descricao: 'fazer treino de braco',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => {
  return (
    <S.Container>
      <p>
        {2} tarefas marcadas como &quot; categoria &ldquo; e &quot; termo
        &ldquo;
      </p>
      <S.Lista>
        <li>
          {tarefas.map((t) => (
            <li key={t.titulo}>
              <Tarefa
                titulo={t.titulo}
                prioridade={t.prioridade}
                status={t.status}
                descricao={t.descricao}
              />
            </li>
          ))}
        </li>
      </S.Lista>
    </S.Container>
  )
}

export default ListaDeTarefas
