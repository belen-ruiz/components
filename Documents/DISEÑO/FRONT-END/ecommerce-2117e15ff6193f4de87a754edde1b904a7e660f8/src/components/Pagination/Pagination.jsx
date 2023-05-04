import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom"

export const Pagination = () => {
    const { search } = useLocation()
    const query = new URLSearchParams(search)
    console.log(query)
    const LIMIT = 20
    const start = parseInt(query.get("inicio")) || 1
    const end = parseInt(query.get("fin")) || LIMIT
    console.log(start, end)
    let navigate = useNavigate()

    const handlePrev = (e)=>{
        if((start-LIMIT) > 0){
        navigate({search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}`})}
    };

    const handleNext = (e) =>{
        navigate({search:`?inicio=${start + LIMIT}&fin=${end + LIMIT}`})
    }

  return (
    <div>
        <h1>Productos</h1>
        <p>Se muestran productos de la pagina desde la pagina {start} a {end}</p>
        <button onClick={handlePrev}> ATRAS </button>
        <button onClick={handleNext}> ADELANTE </button>
    </div>
  )
}
