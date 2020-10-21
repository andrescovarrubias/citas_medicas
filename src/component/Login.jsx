import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

     //* State para iniciar sesion
     const[usuario,guardarUsuario] = useState({
          usuario:'',
          contraseña:''
     })

     const {user,contraseña} = usuario;

     const onChange= e => {
          guardarUsuario({
               ...usuario,
               [e.target.name]: e.target.value
          })
     }

     //* Iniciando sesion
     const onSubmit = e => {
          e.preventDefault();

          //* Validar que no haya campos vacios

          //* Pasarlo al action
     }

     return ( 
          <div className="form-usuario">
               <div className="contenedor-form sombra-dark">
                    <h1>INICIO SESIÓN</h1>
                    <form onSubmit={onSubmit}>
                         <div className="campo-form col-m-12">
                              <label htmlFor="usuario">Usuario:</label>
                              <input
                                   type="text"
                                   id="usuario"
                                   name="usuario"
                                   placeholder="Ingresa tu Usuario"
                                   onChange={onChange}
                                   autoComplete="off"
                                   value={user}
                                   required
                              />
                         </div>
                         <div className="campo-form col-m-12">
                              <label htmlFor="password">Contraseña:</label>
                              <input
                                   type="password"
                                   id="contraseña"
                                   name="contraseña"
                                   placeholder="Ingresa tu Contraseña"
                                   onChange={onChange}
                                   autoComplete="off"
                                   value={contraseña}
                                   required
                              />
                         </div>
                         <div className="campo-form">
                              <input type="submit" className="btn btn-outline-success iniciar_sesion" value="Iniciar Sesión"/>
                         </div>
                         <div className="registro">
                              <a href="#">Registrarse</a>
                         </div>
                    </form>
                    
               </div>
          </div>
      );
}
 
export default Login;