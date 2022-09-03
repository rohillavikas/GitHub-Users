import React from 'react'

const Users = ({data}) => {
  return (
    <>
<div className="container text-center">
      <h2 className="">List of GitHub Users</h2> 
    </div>
    <div className='container-fluid mt-5'>
   <div className='row align-items-start'>
    
{
  data.map((currElem)=>{
 return(
  <div key={currElem.id}>
<div className="card bg-light m-4 row p-2 container-fluid  border-none "  style={{width:"28rem", height:"180px"}} >
  <img src={currElem.avatar_url} style={{height:"150px", width:"140px"}} className="card-img-top col-3 rounded" alt="..."/>
  
  <div className="col-8" style={{zIndex:"5"}}>
    <h3 className="text-center">{currElem.login}</h3>
    <h4 className="text-center">Vikas</h4>
    <div className="row bg-secondary rounded p-1">
      <div className="col"><h6 className="text-center">Article</h6><p className="text-center">45</p></div>
      <div className="col"><h6 className="text-center">Followers</h6><p className="text-center">45</p></div>
      <div className="col"><h6 className="text-center">Rating</h6><p className="text-center">45</p></div>
    </div>
    </div>
</div>
  </div>
  
 )
})   
}

</div>
</div>
    </>
  )
}

export default Users