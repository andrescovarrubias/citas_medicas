import React from 'react';

const Login = () => {


     const onChange=() => {

     }

     return ( 
          <div className="form-usuario">
               <div className="contenedor-form sombra-dark">
                    <h1>INICIAR SESIÓN</h1>
                    <form>
                         <div className="campo-form">
                              <label htmlFor="usuario">Usuario</label>
                              <input
                                   type="text"
                                   id="usuario"
                                   name="usuario"
                                   placeholder="Ingresa tu Usuario"
                                   onChange={onChange}
                                   autoComplete="off"
                                   required
                              />
                         </div>
                         <div className="campo-form">
                              <label htmlFor="password">Contraseña</label>
                              <input
                                   type="password"
                                   id="contraseña"
                                   name="contraseña"
                                   placeholder="Ingresa tu Contraseña"
                                   onChange={onChange}
                                   autoComplete="off"
                                   required
                              />
                         </div>
                         <div className="campo-form">
                              <input type="submit" className="btn btn-outline-success iniciar_sesion" value="Iniciar Sesión"/>
                         </div>
                    </form>
               </div>
          </div>
      );
}
 
export default Login;