import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import mainStore from './store/index'
import Home from './pages/Home'
import NovasTarefas from './pages/NovasTarefas'

const rotas = createBrowserRouter([
  {
    path: `/`,
    element: (
      <>
        <Home />
      </>
    )
  },
  {
    path: `/novo`,
    element: <NovasTarefas />
  }
])

function App() {
  return (
    <Provider store={mainStore}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
