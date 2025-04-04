import React from 'react'
import {get} from "../assets/Services/Functions"
import { useEffect,useState } from 'react'
import { useContext } from 'react'
import { mycontext } from '../context/MyContext'
import {getById,Delete} from "../assets/Services/Functions"

const Table = () => {
   
    const {user,setUser,toEdit,setToEdit,editStatus,setEditStatus}=useContext(mycontext)
    useEffect(() => {
        const fetchData = async () => {
          try{
            const response = await get()
            setUser(response.data)
            console.log(response.data);
            
          }
          catch(error){
            console.log("Error",error)
        }
        
        }
        
        fetchData()
        
        },[])

        const handleEdit=async(id)=>{
          try{
              const response=await getById(id)
              setToEdit(response.data)
             console.log(response.data)
              setEditStatus(true)
          }
          catch(error){
              console.log("Error",error)
          }
      
      
        }



        const handleDelete=async(id)=>{
          try{
            const response=await Delete(id)
            console.log(response)
            if(response.status===200){
              const filterData=user.filter((item)=>item.id!==id)
              setUser(filterData)
            }
          }
          catch(error){
            console.log("Error",error)
          }
      }





  return (
    <>
    <div  style={{paddingBottom:"20vh"}} className="col-12 ">
    <div className=" pt-5 container-fluid position-relative">
  <div  style={{overflow:"scroll"}} className="row ">
    <table  className="table">
<thead>
  <tr >
    <th  scope="col">id</th>
    <th scope="col">Name</th>
    <th scope="col">UserName</th>
    <th scope="col">Email</th>
    <th scope="col">Phone</th>
    <th scope="col">Website</th>
    <th scope="col">Street</th>
    <th scope="col">Suite</th>
    <th scope="col">City</th>
    <th scope="col">Zip_Code</th>
    <th scope="col">CompanyName</th>
    <th scope="col">CatchPhrase</th>
    <th scope="col">Bs</th>
    <th scope="col">Edit</th>
    <th scope="col">Delete</th>
  </tr>
</thead>
{user.map((item,index) =>(
<tbody key={index}>
  <tr>
    <th scope="row">{index+1}</th>
    <td>{item.name}</td>
    <td >{item.username}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.website}</td>
    <td>{item.address.street}</td>
    <td>{item.address.suite}</td>
    <td>{item.address.city}</td>
    <td>{item.address.zipcode}</td>
    <td>{item.company.name}</td>
    <td>{item.company.catchPhrase}</td>
    <td>{item.company.bs}</td>
    <td><i className="bi bi-pencil-square" onClick={()=>handleEdit(item.id)}></i></td>
    <td><i className="bi bi-person-x-fill" onClick={()=>handleDelete(item.id)}></i></td>
  </tr>
</tbody>
))}
</table>
      </div>
      </div>
      </div>
      </>

  )
}

export default Table