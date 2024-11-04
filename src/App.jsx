import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Inicio/Home';
import { HabitacionState } from './context/habitaciones/habitacionState';
import { Contacto } from './Components/Contacto/Contacto';
import { Habitaciones } from './Components/Habitaciones/Habitaciones';
import { ReservaHabitacion } from './Components/Habitaciones/ReservaHabitacion/ReservaHabitacion';
import { Admin } from './Components/Admin/Admin';
import { Crud } from './Components/Admin/Crud/Crud';
import { ClienteState } from './context/clienteContext/clienteState';
import { DisponibleState } from './context/disponibilidad/DisponibleState';
import { useContext } from 'react';
import { Boleta } from './Components/Habitaciones/boletaHotel/Boleta';
function App() {
  return (
    <HabitacionState>
      <DisponibleState>
        <ClienteState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/habitaciones" element={<Habitaciones />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/reservar" element={<ReservaHabitacion />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/panel" element={<Crud />} />
              <Route path="/boleta" element={<Boleta />} />
            </Routes>
          </BrowserRouter>
        </ClienteState>
      </DisponibleState> 
    </HabitacionState>
  );
}

export default App;
