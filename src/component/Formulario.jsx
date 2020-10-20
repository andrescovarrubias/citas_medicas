import React, {Fragment, useState} from 'react';


const Formulario = () => {

     //* Crear state de citas
     const [cita, actualizarCita] = useState({
          paciente:'',
          tutor:'',
          fecha:'',
          hora:'',
          sintomas:''

     })

     //* Function que se ejecuta cuando escribe el usuario
     const handleChange = e => {
          actualizarCita({
               ...cita,
               [e.target.name] : e.target.value
          })
     }


     return ( 
          <Fragment>
               <h2>Crear Citas:</h2>

               <form action="">
                    <label>Paciente:</label>
                    <input 
                         type="text" 
                         placeholder="Nombre Completo"
                         name="paciente"
                         className="u-full-width"
                         onChange={handleChange}
                    />
                    <label>Tutor:</label>
                    <input 
                         type="text"
                         name="tutor"
                         placeholder="Nombre del Tutor"
                         className="u-full-width"
                         onChange={handleChange}
                    />
                    <label>Fecha:</label>
                    <input 
                         type="date"
                         name="fecha"
                         className="u-full-width"
                         onChange={handleChange}
                    />
                    <label>Hora:</label>
                    <input 
                         type="time"
                         name="hora"
                         className="u-full-width"
                         onChange={handleChange}
                    />
                    <label>Sintomas:</label>
                    <textarea 
                         name="sintomas" 
                         className="u-full-width"
                         resize="none"
                         onChange={handleChange}
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