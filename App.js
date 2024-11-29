import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState ,useEffect} from 'react';
import Additeam from "./Additeam";
import Searchiteam from "./Searchiteam";
import apiRequests from "./apiRequests";


function App() {
  
  const API_URL="http://localhost:3500/iteams"
  
  const [iteams,setIteam]=useState([])
  const [newIteam,setNewIteam]=useState('')
  const[search,setSearch]=useState('')
  const[fetchError,setfetchError]=useState(null)
  const[isLoading,setisLoding]=useState(true)
  



  const AddIteam =async(iteam)=>{
  const id=iteams.length ? iteams[iteams.length-1].id +1:1     //to ask the last position of id
  const AddNewIteam={id,checked:'false',iteam}
  const listIteams=[...iteams,AddNewIteam]
  setIteam(listIteams)
  localStorage.setItem("todo_list",JSON.stringify
  (listIteams))

  const postOptions={
    method:'POST',
    headers:{
      "content-Type":"application.json"
    },
    body: JSON.stringify(AddNewIteam)
  }

  const result=await apiRequests(API_URL,postOptions)
  if(result) setfetchError(result)


  }
  
 
  const handleCheck =async(id)=>{
    
      const listIteam= iteams.map((iteam)=>
      iteam.id===id ?{...iteam ,checked:!iteam.checked}:iteam)  
      setIteam(listIteam)
      localStorage.setItem("todo_list",JSON.stringify(listIteam))

      const myIteam=listIteam.filter((iteam) => iteam.id===id)

      const updateOptions={
        method:'PATCH',
        headers:{
          "content-Type":"application.json"
        },
        body: JSON.stringify({checked:myIteam[0].checked})
      }
      const reqUrl = `${API_URL}/${id}`       //to combain a id in url to pass a url spacing is important
      const result = await apiRequests(reqUrl,updateOptions)
      if(result) setfetchError(result)

  }    
 
  const handleDelete=async(id)=>{
    const listIteam= iteams.filter((iteam)=>
    iteam.id!==id )  
    setIteam(listIteam)
    const deleteOptions={
      method:'delete'}
    
    const reqUrl = `${API_URL}/${id}`       //to combain a id in url to pass a url spacing is important
    const result = await apiRequests(reqUrl,deleteOptions)
    if(result) setfetchError(result)
  }
  


const handleSubmit=(e)=>{
    e.preventDefault()
    if(!newIteam)return
    console.log(newIteam)
    AddIteam(newIteam)
    setNewIteam('')
}


useEffect(()=>{
  const feachIteams = async () =>{
    try{
      const responce=await fetch(API_URL)
      if(!responce.ok) throw Error("Data not recived")
      const listIteams= await responce.json()
      setIteam(listIteams)
    }
    catch(err){
      setfetchError(err.message)
    }
    finally{
      setisLoding(false)
    }
  }
  setTimeout(()=>{
  (async ()=> await feachIteams ())()
  },2000)
},[])
  
  
  
  return (
    <div className="App">
        <Header title="ram"/> 
        <Additeam
        newIteam={newIteam}
        setNewIteam={setNewIteam}
        handleSubmit={handleSubmit}
        />
        <Searchiteam
        search={search}
        setSearch={setSearch}
        />
        <main>
          {isLoading&&<p>loading...</p>}
          {fetchError&&<p>{`error: ${fetchError}`}</p>}
        {!isLoading && !fetchError &&<Content
        
        iteams={iteams.filter(iteam =>((iteam.iteam).toLowerCase()).includes(search.toLocaleLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />}
        </main>
        <Footer
        length={iteams.length}
        />
    </div>
  );
}

export default App;
