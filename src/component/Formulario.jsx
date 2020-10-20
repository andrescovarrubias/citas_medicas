import React, {Fragment} from 'react';


const Formulario = () => {
     return ( 
          <Fragment>
               <h2>Crear Citas:</h2>

               <form action="">
                    <label>Paciente:</label>
                    <input 
                         type="text" 
                         placeholder="Nombre Completo"
                         name="persona"
                         className="u-full-width"
                    />
                    <label>Tutor:</label>
                    <input 
                         type="text"
                         name="tutor"
                         placeholder="Nombre del Tutor"
                         className="u-full-width"
                    />
                    <label>Fecha:</label>
                    <input 
                         type="date"
                         name="fecha"
                         className="u-full-width"
                    />
                    <label>Hora:</label>
                    <input 
                         type="time"
                         name="hora"
                         className="u-full-width"
                    />
                    <label>Sintomas:</label>
                    <textarea 
                         name="sintomas" 
                         className="u-full-width"
                         resize="none"
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