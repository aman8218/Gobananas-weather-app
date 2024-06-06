import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from './pages/WeatherApp';

function App() {

  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<WeatherApp/>} exact />
      </Routes>
    </Router>
    </>
  )
}

export default App
