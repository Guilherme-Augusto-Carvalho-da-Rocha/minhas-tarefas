import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/tarefa'

type FiltroState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtrosSlice = createSlice({
  name: 'filtros',
  initialState,
  reducers: {
    trocaTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    trocaFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { trocaTermo, trocaFiltro } = filtrosSlice.actions
export default filtrosSlice
