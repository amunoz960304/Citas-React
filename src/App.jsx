import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'



function App() {

    const [patients, setPatients] = useState([]);
    const [patient, setPatient] = useState({});

    useEffect(() => {
        const getLs = () => {
           const patientsLs = JSON.parse(localStorage.getItem('patients')) ?? [];
           setPatients(patientsLs);
        }
        getLs();
    }, [])
    

    useEffect(() => {
        localStorage.setItem('patients', JSON.stringify( patients ));
    }, [patients]);

    const deletePatient = (id) => {
        const updatePatients = patients.filter( patient => patient.id !== id )
        setPatients(updatePatients);
    }

    return (
      <div className="container mx-auto mt-20">
          <Header/>

          <div className="mt-12 md:flex">
              <Formulario
                  patients={patients}
                  setPatients={setPatients}
                  patient={patient}
                  setPatient={setPatient}
              />
              <ListadoPacientes
                  patients={patients}
                  setPatient={setPatient}
                  deletePatient={deletePatient}
              />
          </div>
      </div>
    )
}

export default App
