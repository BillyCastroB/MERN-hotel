import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Inicio/Home';
import { HabitacionState } from './context/habitacionState';
import { Contacto } from './Components/Contacto/Contacto';
import { Habitaciones } from './Components/Habitaciones/Habitaciones';
import { ReservaHabitacion } from './Components/Habitaciones/ReservaHabitacion/ReservaHabitacion';
import { Admin } from './Components/Admin/Admin';
import { Crud } from './Components/Admin/Crud/Crud';

function App() {
  return (
    <HabitacionState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habitaciones" element={<Habitaciones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/reservar" element={<ReservaHabitacion />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/panel" element={<Crud />} />
        </Routes>
      </BrowserRouter>
    </HabitacionState>
  );
}

export default App;
