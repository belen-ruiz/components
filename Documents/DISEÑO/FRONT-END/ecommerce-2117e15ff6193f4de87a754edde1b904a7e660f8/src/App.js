import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RequestProvider } from "./components/HooksData/requestContainer";
import { Router } from "./components/Rutas/Router";



function App() {
  return (
    <RequestProvider>
      <BrowserRouter>
          <Router /> 
      </BrowserRouter>
    </RequestProvider>
  );
}

export default App;
