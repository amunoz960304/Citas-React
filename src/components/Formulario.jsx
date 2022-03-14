import { useState, useEffect } from "react";
import Error from "./Error";
import Paciente from "./Paciente";

const Formulario = ({patients, setPatients, patient, setPatient}) => {

  const [name, setName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
      if(Object.keys(patient).length > 0){
          setName(patient.name)
          setCustomerName(patient.customerName)
          setEmail(patient.email)
          setDate(patient.date)
          setComment(patient.comment)
      }
  }, [patient])
  

  const generarId = () => {
      const date = Date.now().toString(36);
      const random = Math.random().toString(36).substr(2);

      return date + random;
  }
 
  const handleSubmit = (e) => {
      e.preventDefault();

      if([name, customerName, email, date, comment].includes('')){
          setError(true)
          return
      } 

      setError(false)
      
      const objectPatient = {
          name,
          customerName,
          email,
          date,
          comment,
      }

      if(patient.id){
          objectPatient.id = patient.id
          const updatePatients = patients.map( patientState => patientState.id === patient.id ? objectPatient : patientState)
          setPatients(updatePatients)
          setPatient({})
      } else {
          objectPatient.id = generarId();
          setPatients([...patients, objectPatient]);
      }
      

      setName('')
      setCustomerName('')
      setEmail('')
      setDate('')
      setComment('')
    
  }

  return (
      <div className="md:w-1/2 lg:w-2/5">
          <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

          <p className="text-lg mt-5 text-center mb-10">
              Añade Pacientes y {''}
              <span className="text-indigo-600 font-bold">Administralos</span>
          </p>

          <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                onSubmit={handleSubmit}
          >   
              {error && 
                 <Error
                    message='Todos los campos son obligatorios.'
                 />
              }
              <div className="mb-5">
                  <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">Nombre Mascota</label>
                  <input 
                      id="mascota"
                      type="text" 
                      placeholder="Nombre de la Mascota"
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      value={name}
                      onChange={ (e) => setName(e.target.value)}
                  />
              </div>
              <div className="mb-5">
                  <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">Nombre Propietario</label>
                  <input 
                      id="propietario"
                      type="text" 
                      placeholder="Nombre del Propietario"
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      value={customerName}
                      onChange={ (e) => setCustomerName(e.target.value)}
                  />
              </div>
              <div className="mb-5">
                  <label htmlFor="email" className="block text-gray-700 font-bold uppercase">Email</label>
                  <input 
                      id="email"
                      type="email" 
                      placeholder="Email Contacto Propietario"
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      value={email}
                      onChange={ (e) => setEmail(e.target.value)}
                  />
              </div>
              <div className="mb-5">
                  <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">Alta</label>
                  <input 
                      id="alta"
                      type="date" 
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      value={date}
                      onChange={ (e) => setDate(e.target.value)}
                  />
              </div>
              <div className="mb-5">
                  <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">Sintomas</label>
                  <textarea
                      id="sintomas"
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      placeholder="Describe los Sintomas"
                      value={comment}
                      onChange={ (e) => setComment(e.target.value)}
                  />
              </div>

              <input 
                  type="submit" 
                  className="bg-indigo-600 w-full p-3 text-white font-bold font-bold uppercase 
                             hover:bg-indigo-700 cursor-pointer transition-all "
                  value={ patient.id ? 'Editar Paciente' : 'Agregar Paciente'}
              />
          </form>
      </div>
  )
}

export default Formulario