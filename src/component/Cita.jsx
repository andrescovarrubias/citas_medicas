import React from 'react'

const Cita = ({cita, eliminarCita}) => {
    return(
        <div className="cita">
            <p>Paciente: <span>{cita.paciente}</span></p>
            <p>Tutor: <span>{cita.tutor}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(cita.id)}
            >Eliminar &times;</button>
        </div>
        
    );
}
 
export default Cita;