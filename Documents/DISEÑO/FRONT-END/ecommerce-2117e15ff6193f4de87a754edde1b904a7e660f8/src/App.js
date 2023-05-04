import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MiCuenta } from "./components/Routes/MiCuenta";
import { Home } from "./components/Routes/Home";
import { Lookbook } from "./components/Routes/Lookbook";
import { ItemList } from "./components/HooksData/ItemList";
import { RequestProvider } from "./components/HooksData/requestContainer";
import { ApiContainer } from "./components/API/ApiContainer";
import { Error404 } from "./components/Error404/Error404";
import SongSearch from "./components/SongSearch/SongSearch";
import { User } from "./components/Usuarios/User";
import { Pagination } from "./components/Pagination/Pagination";




function App() {
  return (
    <RequestProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path={"/mi-cuenta"} element={<MiCuenta />} />          
          <Route exact path={"/lookbook"} element={<Lookbook /> } />
          <Route exact path={"/fav"} element={<ItemList /> } />
          <Route exact path={"/APIs"} element={<ApiContainer /> } />
          <Route exact path={"/song-search"} element={<SongSearch /> } />
          <Route path={"/usuario/:username"} element={<User /> } />
          <Route exact path={"/productos"} element={<Pagination /> } />


          <Route path="*" element={<Error404 /> } />
        </Routes>
      </BrowserRouter>
    </RequestProvider>
  );
}

export default App;
