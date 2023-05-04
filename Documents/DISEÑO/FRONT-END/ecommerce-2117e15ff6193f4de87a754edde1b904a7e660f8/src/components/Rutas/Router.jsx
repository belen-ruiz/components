import { useRoutes } from 'react-router-dom'
import { ApiContainer } from '../API/ApiContainer'
import { Error404 } from '../Error404/Error404'
import { ItemList } from '../HooksData/ItemList'
import { Pagination } from '../Pagination/Pagination'
import { Home } from '../Routes/Home'
import { Lookbook } from '../Routes/Lookbook'
import { MiCuenta } from '../Routes/MiCuenta'
import SongSearch from '../SongSearch/SongSearch'
import { User } from '../Usuarios/User'
import { Topic1 } from './Topics'
import { TopicsContainer } from './TopicsContainer'

// se importa en la app

const allRoutes = () => {

    const routes = [
        {
            path:"/",
            exact: true,
            element: <Home />
        },
        {
            path:"/home",
            exact: true,
            element: <Home />
        },
        {
            path:"/mi-cuenta",
            exact: true,
            element: <MiCuenta/>
        },
        {
            path:"/lookbook",
            exact: true,
            element: <Lookbook />
        },
        {
            path:"/fav",
            exact: true,
            element: <ItemList />
        },
        {
            path:"/APIs",
            exact: true,
            element: <ApiContainer />
        },
        {
            path:"/song-search",
            exact: true,
            element: <SongSearch />
        },
        {
            path:"/productos",
            exact: true,
            element: <Pagination />
        },
        {
            path:"/usuario/:username",
            exact: false,
            element: <User />
        },
        {
            path:"/topics",
            exact: false,
            element: <TopicsContainer />
        },
        {
            path:"/topics/:topic",
            exact: false,
            element: <Topic1 />
        },
        {
            path:"/*",
            exact: false,
            element: <Error404 />
        },
    ]
  return [ ...routes ]
}

export const Router = () => {
    const appRoutes = allRoutes()
    return useRoutes(appRoutes);
}

