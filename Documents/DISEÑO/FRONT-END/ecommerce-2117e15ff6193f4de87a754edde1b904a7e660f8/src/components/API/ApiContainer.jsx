import React from 'react'
import { AJAXHooks } from './AJAXHooks'
import ItemList from './ItemList'
import ItemList2 from './ItemList2'

export const ApiContainer = () => {
  return (
    <>
        <div>ApiContainer</div>
        {/* <AJAXHooks /> */}
        <ItemList />
        <ItemList2 />
    </>
  )
}
