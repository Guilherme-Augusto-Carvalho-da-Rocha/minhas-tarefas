import { configureStore } from '@reduxjs/toolkit'
import tarefasSlice from './reducers/tarefas'
import filtrosSlice from './reducers/filtros'

const store = configureStore({
  reducer: {
    tarefas: tarefasSlice.reducer,
    filtros: filtrosSlice.reducer
  }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
