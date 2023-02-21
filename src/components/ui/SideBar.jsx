import React from 'react'
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { NavLink, useLocation } from 'react-router-dom';

export const SideBar = () => {
    const location = useLocation();
    
    return (
        <div className="md:w-2/6 bg-white px-5 py-10 shadow-lg rounded-2xl">
            <h1 className='text-xl font-bold bg-gray-800 p-3 text-gray-100 rounded-lg'>CMR - Empleados</h1>

            <nav className='grid gap-3 mt-10'>
                <NavLink to='/' className={`py-3 px-4 font-semibold flex items-center gap-3 rounded-lg hover:text-gray-100 hover:bg-gray-800 transition-all ${ location.pathname == '/' ? 'bg-gray-800 text-gray-50' : '' }`}>
                    <FiUsers />
                    Clientes
                </NavLink>

                <NavLink to='/clientes/nuevo' 
                    className={`py-3 px-4 font-semibold flex items-center gap-3 rounded-lg hover:text-gray-100 hover:bg-gray-800 transition-all ${ location.pathname == '/clientes/nuevo' ? 'bg-gray-800 text-gray-50' : '' }`}
                >
                    <FiUserPlus />
                    Agregar clientes
                </NavLink>
            </nav>
        </div>
    )
}
