import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Inicio/Home';
import { HabitacionState } from './context/habitaciones/habitacionState';
import { Contacto } from './Components/Contacto/Contacto';
import { Habitaciones } from './Components/Habitaciones/Habitaciones';
import { ReservaHabitacion } from './Components/Habitaciones/ReservaHabitacion/ReservaHabitacion';
import { Admin } from './Components/Admin/Admin';
import { Crud } from './Components/Admin/Crud/Crud';
import { ClienteState } from './context/clienteContext/clienteState';
import { useContext } from 'react';
function App() {
  return (
    <HabitacionState>
        <ClienteState>
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
        </ClienteState>
    </HabitacionState>
  );
}

export default App;
