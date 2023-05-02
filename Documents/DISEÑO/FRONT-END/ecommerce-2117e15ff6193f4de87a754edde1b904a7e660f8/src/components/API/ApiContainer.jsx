import React from 'react'
import { AJAXHooks } from './AJAXHooks'
import ItemList from './ItemList'

export const ApiContainer = () => {
  return (
    <>
        <div>ApiContainer</div>
        <AJAXHooks />
        <ItemList />
    </>
  )
}
