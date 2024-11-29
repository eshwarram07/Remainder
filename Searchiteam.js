import React from 'react'

const Searchiteam = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault}>
    <label htmlFor='search'>Search</label>
    <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='SearchIteams'
        value={search}  //value whisch is searched in browser
        onChange={(e)=>setSearch(e.target.value)} //sending the prowser value throungh event to set search
    />
    
    




    </form>
  )
}

export default Searchiteam