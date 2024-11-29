const apiRequests=async(url='',optionsObj=null,errMsg=null)=>{
    try{
        const responce=fetch(url,optionsObj)
        if(!responce.ok)throw console.error("plz reload the page");
        
    }
    catch(err){
        err=errMsg
    }
    finally{
        return errMsg
    }
}
export default apiRequests