import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import "../Css/Form.css"
import { mycontext } from '../context/MyContext'
import { Create,update} from '../assets/Services/Functions'

const Form = () => {
  const {
    id,
    setId,
    name,
    setName,
    userName,
    setUserName,
    companyName,
    setCompanyName,
    email,
    setEmail,
    suite,
    setSuite,
    street,
    setStreet,
    city,
    setCity,
    zipCode,
    setZipCode,
    phone,
    setPhone,
    website,
    setWebsite,
    lat,
    setLat,
    lng,
    setLng,
    catchPhrase,
    setCatchPhrase,
    bs,
    setBs,
    toEdit,
    setToEdit,
    editStatus,
    setEditStatus
   } = useContext(mycontext)

   useEffect(() => {
    if (toEdit) {
      setId(toEdit.id || '');
      setName(toEdit.name || '');
      setUserName(toEdit.username || '');
      setCompanyName(toEdit.company?.name || '');
      setEmail(toEdit.email || '');
      setSuite(toEdit.address?.suite || '');
      setStreet(toEdit.address?.street || '');
      setCity(toEdit.address?.city || '');
      setZipCode(toEdit.address?.zipcode || '');
      setPhone(toEdit.phone || '');
      setWebsite(toEdit.website || '');
      setLat(toEdit.address?.geo?.lat || '');
      setLng(toEdit.address?.geo?.lng || '');
      setCatchPhrase(toEdit.company?.catchPhrase || '');
      setBs(toEdit.company?.bs || '');
    }
  }, [toEdit]);



const handleAdd=async()=>{
  
const newData={
  id:id,
  name,
  userName,
  email,
  address:{
    street,
    suite,
    city,
    zipcode:zipCode,
    geo:{
      lat,
      lng
    }
  },
  phone,
  website,
  company:{
    name:companyName,
    catchPhrase,
    bs
  }

}
  try {
   const response= await Create(newData)
    console.log(response)
    if(response.status===201){
      console.log("success")
    }response
  } catch (error) {
    console.log(error);
  }
}


const handleUpdate = async () => {
  const uptData = {
    id,
    name,
    userName,
    email,
    address: {
      street,
      suite,
      city,
      zipcode: zipCode,
      geo: {
        lat,
        lng
      }
    },
    phone,
    website,
    company: {
      name: companyName,
      catchPhrase,
      bs
    }
  };
  try {
    const response = await update(id, uptData);
    console.log(response);
    if (response.status === 200) {
      console.log("Update successful");
    }
  } catch (error) {
    console.log(error);
  }
};


    return (
        <>
        <ul className="list-group list1 d-flex flex-row align-items-center col-8">
          <li><label htmlFor="">Id</label><input type="text" value={id}  onChange={(e)=>setId(e.target.value)}/></li>
          <li><label htmlFor="">Name</label><input type="text" value={name}  onChange={(e)=>setName(e.target.value)} /></li>
          <li><label htmlFor="">UserName</label><input type="text" value={userName}  onChange={(e)=>setUserName(e.target.value)} /></li>
          <li><label htmlFor="">Company Name</label><input type="text" value={companyName}  onChange={(e)=>setCompanyName(e.target.value)} /></li>  
          <li><label htmlFor="">Email</label><input type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} /></li>
        </ul>
        <ul className="list-group list2 d-flex flex-row align-items-center col-8">
          <li><label htmlFor="">Suite</label><input type="text" value={suite} onChange={(e)=>setSuite(e.target.value)} /></li>
          <li><label htmlFor="">Street</label><input type="text"  value={street} onChange={(e)=>setStreet(e.target.value)}  /></li>
          <li><label htmlFor="">City</label><input type="text"  value={city} onChange={(e)=>setCity(e.target.value)}  /></li>
          <li><label htmlFor="">Zip-Code</label><input type="text"  value={zipCode} onChange={(e)=>setZipCode(e.target.value)} /></li>  
          <li><label htmlFor="">Phone</label><input type="text"  value={phone} onChange={(e)=>setPhone(e.target.value)}  /></li>
        </ul>
        <ul  className="list-group list2 d-flex flex-row align-items-center col-8">
          <li><label htmlFor="">Website</label><input type="text"  value={website} onChange={(e)=>setWebsite(e.target.value)}/></li>
          {/* <li><label htmlFor="">Zip-Code</label><input type="text"  value={zipCode} onChange={(e)=>setZipCode(e.target.value)} /></li>   */}
          <li><label htmlFor="">latitude</label><input type="text"  value={lat} onChange={(e)=>setLat(e.target.value)} /></li>  
          <li><label htmlFor="">longitude</label><input type="text"  value={lng} onChange={(e)=>setLng(e.target.value)} /></li>  
          <li><label htmlFor="">Catch-Pharse</label><input type="text"  value={catchPhrase} onChange={(e)=>setCatchPhrase(e.target.value)} /></li>  
          <li><label htmlFor="">Bs</label><p><input type="text" value={bs} onChange={(e)=>setBs(e.target.value)} /></p></li>
        </ul>
        <ul className="list-group list2 d-flex flex-row list align-items-center col-8">
          <li><button onClick={handleAdd} >Add</button></li>  
          <li><button onClick={handleUpdate}>Update</button></li>  
        </ul>
        </>
        
      )
}

export default Form