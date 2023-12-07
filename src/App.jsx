import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Padaria" />} />
      <Route path="/Padaria" element={ <Home />  } />
    </Routes>
  )
}

export default App
