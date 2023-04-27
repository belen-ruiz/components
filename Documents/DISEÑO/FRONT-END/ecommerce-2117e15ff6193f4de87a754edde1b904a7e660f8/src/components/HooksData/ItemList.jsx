import React from 'react'
import { useItems } from './useItems'
import { Item } from "./Item"


//se retorna este 
export const ItemList = () => {
  
    const [results, error] = useItems()

  return (
    <div>
        
    { results == null 
      ?
      <p>Error fetching : {error}</p>
      :
      results.map(item=>
      <Item item={item} />)
    }   

    </div>
  )
}
