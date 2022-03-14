const Paciente = ({ patient, setPatient, deletePatient }) => {

    const { name, customerName, email, date, comment, id } = patient

    const handleEliminar = () => {
       const response =  confirm('Deseas eliminar este paciente?');

       if(response){
            deletePatient(id);
       }
    }

    return (
        <div className="bg-white mx-5 shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Paciente: {''}
                <span className="font-normal normal-case">{name}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Dueño: {''}
                <span className="font-normal normal-case">{customerName}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">{date}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: 
                <span className="font-normal normal-case">{comment}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 rounded-md text-center text-white font-bold uppercase"
                    onClick={ () => setPatient(patient)}
                > Editar </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 rounded-md text-center text-white font-bold uppercase"
                    onClick={handleEliminar}
                > Eliminar </button>
            </div>
        </div>  
    )
}

export default Paciente