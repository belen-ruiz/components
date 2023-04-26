
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

export const ItemContainer = () => {

  const [ loading, setLoading ] = useState(true);
  const [ producto, setProducto ] =  useState()

  return (

    producto && (
      <>
        <ItemDetail producto ={ producto }/> 
      </>
      ));  
}

