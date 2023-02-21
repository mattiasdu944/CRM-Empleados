import { useLoaderData } from "react-router-dom";
import { ClientTable } from "../components/ui/ClientTable";
import { clientes } from "../data";

// similar to useEffect
// return data
export const inicioLoader = () => {
    return clientes;
};


export const Inicio = () => {
    // get data from loader
    const clientes = useLoaderData();

    return (
        <>
            <h1 className='font-black text-4xl'>Clientes</h1>
            <p className="mb-5">Administra a tus clientes</p>

            {
                clientes.length

                ? <ClientTable clientes={ clientes }/>
                : (
                    <div className="d-flex justify-center items-center h-full">
                        <p className="text-4xl font-bold text-gray-500">No se encontraron clientes</p>      
                    </div>
                )

            }
        </>
    )
}
