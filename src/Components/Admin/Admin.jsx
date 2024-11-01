import React, { useEffect, useState } from 'react';
import './Admin.css';
import { clienteAxios } from '../../../config/clienteAxios';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: ''
  });
  
  const [logeo, setLogeo] = useState(false);
  const [mensajeError, setMensajeError] = useState(true)
  const navigate = useNavigate(); // Hook dentro del componente

  useEffect(() => {
    if (logeo) {
      navigate('/panel'); // Navega solo cuando logeo sea true
    }
  }, [logeo, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar datos al backend como POST
      const resultado = await clienteAxios.post('/login', { 
        usuario: formData.usuario, 
        password: formData.contraseña 
      });
      console.log('Resultado del login:', resultado.data);
      
      if (resultado.data.tipo === 'directo') {
        setLogeo(true); // Esto activará el efecto para navegar a "/panel"
      }
    } catch (error) {
      setMensajeError(false);
      console.log('Error en el login:', error.response?.data?.msg || error.message);
    }
  };
  const volverInicio = ()=>{
    navigate('/')
  }
  return (
    <div className='contenedor-login'>
      <img className='fondo-login' src="imagenesPaginas/fondo-login.webp" alt="Fondo de login" />
      <section className='section-login'>
        <form className='form-login' onSubmit={handleSubmit}>
          <h2 className='titulo-login'>LOGIN</h2>
          <fieldset>
            <input
              placeholder='Usuario'
              className='input-login input-usuario'
              type="text"
              name="usuario"
              id='usuario'
              value={formData.usuario}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder='Contraseña'
              className='input-login input-password'
              type="password"
              name="contraseña"
              id='contraseña'
              value={formData.contraseña}
              onChange={handleChange}
            />
          </fieldset>
          <input className='btn-btn-login' type="submit" value="Ingresar" />
          {mensajeError ?  null : <p className='mensajeError'>Usuario/contraseña no valido</p> }
          <div className='container-btn'>
            <button onClick={volverInicio} type='button' className='btn-volver'><img src="./imagenesPaginas/volver.png" alt="" /></button>
          </div>
        </form>
      </section>
    </div>
  );
};
