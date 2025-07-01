import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../Models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

type tarefasState = {
  itens: Tarefa[]
}

const initialState: tarefasState = {
  itens: [
    {
      id: 0,
      titulo: 'Estudar Typescript',
      descricao: 'ver o modulo equivalente na EBAC',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 1,
      titulo: 'pagar conta de internet',
      descricao: 'baixar fatura no email',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 2,
      titulo: 'ir pra academia',
      descricao: 'fazer treino de braco',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    salvar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (t) => t.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('esta tarefa ja foi criada')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          id: ultimaTarefa.id + 1,
          ...action.payload
        }
        state.itens.push(tarefaNova)
      }
    },
    trocaStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export default tarefasSlice
export const { remover, salvar, cadastrar, trocaStatus } = tarefasSlice.actions
