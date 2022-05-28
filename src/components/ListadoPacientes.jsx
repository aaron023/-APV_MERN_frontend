import usePacientes from "../hooks/usePacientes";
import Paciente from "./Paciente";

const ListadoPacientes = () => {

    const { pacientes } = usePacientes(); 
    //console.log(pacientes); //Este console.log se ejecuta infinitamente
    return (
      <>
        { pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-xl mt-5 text-center">Administra tus {''} 
            <span className="text-indigo-600 font-bold">pacienes y citas</span></p>

            {pacientes.map( paciente => (
              <Paciente
                key={paciente._id}
                paciente={paciente}
              />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-xl mt-5 text-center">Comienza agregando pacientes {''} 
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar </span></p>
          </>
        )}
      </>
    )
  }
  
  export default ListadoPacientes