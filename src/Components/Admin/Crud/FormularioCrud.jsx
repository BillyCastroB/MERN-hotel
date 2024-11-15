import React, { useState, useEffect } from 'react';

export const FormularioCrud = ({ habitacionEditada, setHabitacionEditada }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
  });
  const [formFechas, setFormFechas] = useState({
    diaEntrada: '',
    diaSalida: ''
  });

  useEffect(() => {
    if (habitacionEditada.id !== null) {
      setFormData({
        nombre: habitacionEditada.nombre,
        apellidos: habitacionEditada.apellidos,
        email: habitacionEditada.email,
        telefono: habitacionEditada.telefono
      });
      setFormFechas({
        diaEntrada: habitacionEditada.fechaInicio,
        diaSalida: habitacionEditada.fechaFin
      });
    }
  }, [habitacionEditada]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'diaEntrada' || name === 'diaSalida') {
      setFormFechas(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para actualizar los datos en la base de datos
    console.log(formData, formFechas);
    setHabitacionEditada({ id: null }); // Resetear después de enviar
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        Apellidos:
        <input
          type="text"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Teléfono:
        <input
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
      </label>
      <label>
        Fecha de Entrada:
        <input
          type="date"
          name="diaEntrada"
          value={formFechas.diaEntrada}
          onChange={handleChange}
        />
      </label>
      <label>
        Fecha de Salida:
        <input
          type="date"
          name="diaSalida"
          value={formFechas.diaSalida}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Guardar cambios</button>
    </form>
  );
};
