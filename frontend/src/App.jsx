import { Provider } from 'react-redux'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import VetStore from './redux/Store'

function App() {

  return (
    <Provider store={VetStore}>
      <AppRoutes />
    </Provider>
  )
}

export default App
