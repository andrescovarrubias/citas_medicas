import React, {Fragment, useState} from 'react';
import {v4 as uuid} from "uuid"; 

const Formulario = ({crearCita}) => {

     //* Crear state de citas
     const [cita, actualizarCita] = useState({
          paciente:'',
          tutor:'',
          fecha:'',
          hora:'',
          sintomas:''
     });

     const [error, actualizarError] = useState(false);

     //* Function que se ejecuta cuando escribe el usuario
     const handleChange = e => {
          actualizarCita({
               ...cita,
               [e.target.name] : e.target.value
          })
     }

     //* Extraer los valores
     const { paciente, tutor,fecha,hora,sintomas} =cita;

     //* Cuando el usuario presiona el boton
     const submitCita = e => {
          e.preventDefault();
          
          //* Validar
          if (paciente.trim() === '' || tutor.trim() === '' ||
               fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
               actualizarError(true);
               return;
          }

          //* Eliminar el mensaje de error
          actualizarError(false);

          //* Asignar un ID
          cita.id=uuid(); //Creando un id desde la libreria uuid

          //* Crear cita
          crearCita(cita);

          //* Reiniciar el form
          actualizarCita({
               paciente:'',
               tutor:'',
               fecha:'',
               hora:'',
               sintomas:''     
          })
     }


     return ( 
          <Fragment>
               <h2>Crear Citas:</h2>

               {error ? <p className="alerta-error">Todos los campos son obligatorios</p>  : null}

               <form 
                    onSubmit={submitCita}
               >
                    <label>Paciente:</label>
                    <input 
                         type="text" 
                         placeholder="Nombre Completo"
                         name="paciente"
                         className="u-full-width"
                         onChange={handleChange}
                         value={paciente}
                    />
                    <label>Tutor:</label>
                    <input 
                         type="text"
                         name="tutor"
                         placeholder="Nombre del Tutor"
                         className="u-full-width"
                         onChange={handleChange}
                         value={tutor}

                    />
                    <label>Fecha:</label>
                    <input 
                         type="date"
                         name="fecha"
                         className="u-full-width"
                         onChange={handleChange}
                         value={fecha}

                    />
                    <label>Hora:</label>
                    <input 
                         type="time"
                         name="hora"
                         className="u-full-width"
                         onChange={handleChange}
                         value={hora}

                    />
                    <label>Sintomas:</label>
                    <textarea 
                         name="sintomas" 
                         className="u-full-width"
                         resize="none"
                         onChange={handleChange}
                         value={sintomas}

                    ></textarea>
                    <button
                         type="submit"
                         className="u-full-width button-primary"
                    >Agendar Cita</button>
               </form>

          </Fragment>
      );
}
 
export default Formulario;