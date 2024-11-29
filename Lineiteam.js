import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Lineiteam = ({iteam,handleCheck,handleDelete}) => {
  return (
    <li className='item' key={iteam.id}>
          <input
          type='checkbox'
          onChange={()=>handleCheck(iteam.id)}
          checked={iteam.checked}
          />
          <label
            style={(iteam.checked)?
            {textDecoration:'line-through'}:
            null}
           
            onDoubleClick={()=>handleCheck(iteam.id)}>
            {iteam.iteam} </label>
          <FaTrashAlt 
          onClick={()=>handleDelete(iteam.id)} 
            role='button' 
            tabIndex="0"  
            aria-label={`Delete ${iteam.iteam}`} 
          />


        </li>
  )
}

export default Lineiteam