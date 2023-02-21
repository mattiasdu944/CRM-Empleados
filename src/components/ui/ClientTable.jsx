import { IoMdTrash } from 'react-icons/io'
import { IoPencil } from 'react-icons/io5'

export const ClientTable = ({ clientes }) => {
    return (
        <table className='w-full bg-white shadow-md table-auto rounded-md'>
            <thead className='bg-gray-800 text-white rounded-md'>
                <tr>
                    <th className='p-2'>Clientes</th>
                    <th className='p-2'>Contacto</th>
                    <th className='p-2'>Acciones</th>
                </tr>

            </thead>
            <tbody>
                {
                    clientes.map( cliente => (
                        <tr key={ cliente.id }>
                            <td className='p-6'>
                                <p className="font-bold text-xl">{ cliente.nombre }</p>
                                <p><span className="font-bold">Empresa:</span> { cliente.empresa }</p>

                            </td>
                            <td className='p-6'>
                                <p>
                                    <span className="font-bold">Telefono:</span> { cliente.telefono }
                                </p>
                                
                                <p>
                                    <span className="font-bold">Correo:</span> { cliente.email }
                                </p>
                            </td>
                            <td className='p-6 text-center flex gap-2 items-center justify-center'>
                                <button>
                                    <IoPencil/>
                                </button>
                                <button>
                                    <IoMdTrash className='text-red-500'/>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
