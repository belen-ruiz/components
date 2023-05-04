import {
    Link,
    Route,
    Routes,
  } from "react-router-dom";
import { Topic1 } from "./Topics";
  
export const TopicsContainer = () => {
  
    return (
      <div>
        <h3>Temas</h3>
        <ul>
          <li><Link to="tema1">TEMA 1</Link></li>
          <li><Link to="tema2">TEMA 2</Link></li>
          <li><Link to="tema3">TEMA 3</Link></li>
          <li><Link to="tema4">TEMA 4</Link></li>
        </ul>
      </div>
    );
  };
  
