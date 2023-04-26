import React from 'react'
import { useItems } from './useItems'
import { Item } from "./Item"


//se retorna este 
export const ItemList = () => {
  
    const [todos, error] = useItems()

  return (
    <div>
        
    { error !== null 
      ?
      <p>Error fetching : {error}</p>
      :
      todos.map(item=>
      <Item item={item} />)
    }   

    </div>
  )
}
