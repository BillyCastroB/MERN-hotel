import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Inicio/Home';
import { Habitacion } from './Components/Habitaciones/Habitacion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habitaciones" element={<Habitacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;