import React,{ useState } from "react"


export const ItemCount = ({initial, onAdd, stock }) => {
    
    const [count, setCount] = useState(initial);

    const suma =()=>{
        if (count < stock)
        {setCount(count + 1)}
    }

    const resta =()=>{
        if (count > initial)
        {setCount(count - 1)}
    }


    const handleOnAdd =()=>{
        onAdd(count);
    }

    return(
        <div className="box">
            <div className="counter">

                <div className="counterItems op" onClick={suma}> + </div>
                <div className="counterItems"> {count} </div>
                <div className="counterItems op" onClick={resta} > - </div>    
                               
            </div>

            <div className="buttonGreen" onClick={handleOnAdd}>
                    Agregar al Carrito
            </div> 
        </div>
    )

}
