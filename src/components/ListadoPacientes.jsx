import Paciente from "./Paciente"

const ListadoPacientes = ({ patients, setPatient, deletePatient }) => {

    return ( 
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        { patients && patients.length ?
              (<>
                  <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
                  <p className="mb-10 mt-5 text-xl text-center">
                      Administra tus {''}
                      <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                  </p>

                  {
                      patients.map( (patient) => (
                        <Paciente
                            key={patient.id}
                            patient={patient}
                            setPatient={setPatient}
                            deletePatient={deletePatient}
                        />
                      ))
                  }
          
                </>) : 
              (<>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="mb-10 mt-5 text-xl text-center">
                      Comienza agregando pacientes {''}
                      <span className="text-indigo-600 font-bold">y apareceren aquí.</span>
                    </p>
                </>)
        }
        </div>
    )
}

export default ListadoPacientes