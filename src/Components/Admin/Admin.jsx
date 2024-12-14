import React, { useEffect, useState } from 'react';
import './Admin.css';
import { clienteAxios } from '../../../config/clienteAxios';
import { useNavigate, Link } from 'react-router-dom';

export const Admin = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: ''
  });
  const [count, setCount] = useState(0);
  const [ habilitar, setHabilitar] = useState(false)
  const [logeo, setLogeo] = useState(false);
  const [mensajeError, setMensajeError] = useState('');
  const [isUsuarioValido, setIsUsuarioValido] = useState(true); 
  const [isInputValid, setIsInputValid] = useState(true); 
  const navigate = useNavigate();
  useEffect( ()=>{
    if(count===3){
      setHabilitar(true);
    }
  },[count] )
  useEffect(() => {
    if (logeo) {
      navigate('/panel');
    }
  }, [logeo, navigate]);

  useEffect(() => {
    // Solo verificamos el campo 'usuario' para caracteres especiales
    const regex = /^[a-zA-Z0-9]*$/;
    if (!regex.test(formData.usuario)) {
      setIsUsuarioValido(false);
      setMensajeError('Prohibido caracteres especiales en el campo usuario');
    } else {
      setIsUsuarioValido(true);
      setMensajeError(''); // Limpiar el mensaje de error si la entrada es válida
    }
  }, [formData.usuario]); // Este effect solo se ejecuta cuando cambia 'usuario'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setCount( prev=> prev+1 );
    try {
      const resultado = await clienteAxios.post('/login', { 
        usuario: formData.usuario, 
        password: formData.contraseña 
      });
      console.log('Resultado del login:', resultado.data);
      
      if (resultado.data.tipo === 'directo') {
        setLogeo(true);
      }
    } catch (error) {
      setMensajeError('Usuario/contraseña no válido');
      console.log('Error en el login:', error.response?.data?.msg || error.message);
    }
  };

  const volverInicio = () => {
    navigate('/');
  };

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
          {
            habilitar? null : 
            (
              <input 
                className='btn-btn-login' 
                type="submit" 
                value="Ingresar" 
                disabled={!isUsuarioValido || !formData.usuario || !formData.contraseña} // Deshabilita el botón si el usuario es inválido
              />
            )
          }
          
          {mensajeError && <p className='mensajeError'>{mensajeError}</p>}
          {habilitar? <p className='mensajeError'>Excediste el limite de intentos</p>: null}
          <div className='container-btn'>
            <button onClick={volverInicio} type='button' className='btn-volver'>
              <img src="./imagenesPaginas/volver.png" alt="Volver"/>
            </button>
          </div>
          <p className='texto-recuperar'>¿Olvidaste tu contraseña? click aquí</p>
          <Link to={'/recuperarContra'}>Recuperar contraseña</Link>
        </form>
      </section>
    </div>
  );
};
