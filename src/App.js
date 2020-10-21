import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './component/Formulario';
import Cita from './component/Cita';
import NuevaCuenta from './component/auth/NuevaCuenta';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './component/Login';

function App() {

  // * Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // * Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // * Use Effect para realizar operaciones cuando el state cambia
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  // * Funcion que toma las citas actuales y agrega la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }
  // * Funcion que elimina la cita agregada por id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  // * Mensale condicional
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra tus Citas'

  return (
    // <Fragment>
    //   <h1>Administrador de Pacientes</h1>

    //   <div className="container">
    //     <div className="row">
    //       <div className="one-half column">
    //         <Formulario
    //           crearCita={crearCita}
    //         />
    //       </div>
    //       <div className="one-half column">
    //         <h2>{titulo}</h2>
    //         {citas.map(cita => (
    //           <Cita
    //             key={cita.id}
    //             cita={cita}
    //             eliminarCita={eliminarCita}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </Fragment>


    //* LOGIN
    <div>
      <Login/>
    </div>
  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}




export default App;
