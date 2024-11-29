import React from 'react'
import{ FaPlus }from "react-icons/fa";
import { useRef } from 'react';

const Additeam = ({newIteam,setNewIteam,handleSubmit}) => {

  const inputRef=useRef()
  return (
    <form className='addForm' onClick={handleSubmit}>
    <label htmlFor='addIteam'>AddItem</label>
    <input
    autoFocus
    ref={inputRef}
    id='addIteam'
    type='text'
    placeholder='Add Item' 
    required
    value={newIteam}
    onChange={(e)=> setNewIteam(e.target.value)}
    />
   
   
    <button  type='Submit'
    area-lable='Add Iteam'
    onClick={()=> inputRef.current.focus()}>
    
    <FaPlus/>    
    </button>
    


    </form>
  )
}

export default Additeam


