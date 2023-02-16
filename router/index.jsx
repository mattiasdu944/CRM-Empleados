import { createBrowserRouter } from "react-router-dom";

import { Inicio, NuevoCliente } from "../src/pages";
import { MainLayout } from "../src/components/layouts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Inicio/>,

            },
            {
                path: '/clientes/nuevo',
                element: <NuevoCliente/>
            },
        ],
    },

])