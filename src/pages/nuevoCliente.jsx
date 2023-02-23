import { useNavigate, Form, useActionData } from 'react-router-dom'

import { IoChevronBack } from 'react-icons/io5'
import { FormClient } from '../components/ui/FormClient';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const errores = [];
    if( Object.values(data).includes('')){
        errores.push('Todos los campos son obligatorios');
    }

    return { ok: true, errores };
}
 
export const NuevoCliente = () => {
    
    const navigate = useNavigate();
    const errores = useActionData();
    console.log(errores);

    return (
        <>
            <h1 className='font-black text-4xl mb-2'>Nuevos clientes</h1>
            <p className="mb-5">Agrega nuevos clientes</p>

            <div className="flex justify-end">
                <button className='bg-gray-800 rounded-full p-2'
                    onClick={() => navigate(-1)}
                >
                    <IoChevronBack className='text-white'/>
                </button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
                <h2 className='font-bold text-center text-xl mb-3'>Formulario clientes</h2>

                {
                    errores?.errores.length && errores.errores.map((error, index) =>
                        <div key={index} className='my-4 bg-red-500 text-white p-3 w-full'>
                            { error }
                        </div>
                    )
                }

                <Form method='post'>    
                    <FormClient/>
                </Form>
            </div>
        </>
    )
}
