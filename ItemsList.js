import React from 'react'

import Lineiteam from './Lineiteam';

const ItemsList = ({iteams,handleCheck,handleDelete}) => {
  return (
    <ul>
    
      {iteams.map((iteam)=>(
        <Lineiteam
        iteam={iteam}
        key={iteam.id}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
        ))}
      

    </ul>
      )
  
}

export default ItemsList