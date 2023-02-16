import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar } from '../ui/SideBar';

export const MainLayout = () => {
    return (
        <div className='md:flex md:min-h-screen'>
            
            <SideBar/>

            <main className='md:w-5/6 md:min-h-screen overflow-scroll p-5'>
                <Outlet />
            </main>
        </div>
    )
}
