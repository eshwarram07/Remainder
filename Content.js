import React from 'react'


import ItemsList from './ItemsList';




const Content = ({iteams,handleCheck,handleDelete}) => {

    
    
  return (
    <>
      {(iteams.length) ?(
        <ItemsList
        iteams={iteams}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        
        />
   
      ):(
        <p>The list is empty</p>
      )
}
    </>
  )
}

export default Content