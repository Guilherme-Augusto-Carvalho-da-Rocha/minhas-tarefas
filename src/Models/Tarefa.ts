import * as enums from '../utils/enums/tarefa'

class Tarefa {
  id: number
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string

  constructor(
    id: number,
    titulo: string,
    descricao: string,
    prioridade: enums.Prioridade,
    status: enums.Status
  ) {
    this.titulo = titulo
    this.id = id
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
  }
}

export default Tarefa
