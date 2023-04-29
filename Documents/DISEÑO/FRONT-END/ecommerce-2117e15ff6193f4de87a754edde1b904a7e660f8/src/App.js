import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MiCuenta } from "./components/Routes/MiCuenta";
import { Home } from "./components/Routes/Home";
import { Ecommerce } from "./components/Routes/Ecommerce"
import { Home as HomeEcommerce } from "./components/E-commerce/Home"
import { Store } from "./components/E-commerce/Store";
import { Lookbook } from "./components/Routes/Lookbook";
import { ItemList } from "./components/HooksData/ItemList";
import { RequestProvider } from "./components/HooksData/requestContainer";
import { ApiContainer } from "./components/API/ApiContainer";
import SongSearch from "./components/SongSearch/SongSearch";



function App() {
  return (
    <RequestProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path={"/mi-cuenta"} element={<MiCuenta />} />
          <Route exact path={"/e-commerce"} element={<Ecommerce />} />
          <Route exact path={"/e-commerce/home"} element={<HomeEcommerce />} />
          <Route exact path={"/e-commerce/store"} element={<Store/> }/>
          <Route exact path={"/lookbook"} element={<Lookbook /> } />
          <Route exact path={"/fav"} element={<ItemList /> } />
          <Route exact path={"/APIs"} element={<ApiContainer /> } />
          <Route exact path={"/song-search"} element={<SongSearch /> } />

        </Routes>
      </BrowserRouter>
    </RequestProvider>
  );
}

export default App;
