import React from 'react'
import Table from '../components/Table'
import Form from '../components/Form'
import Refresh from '../components/Refresh'
import { mycontext } from '../context/MyContext'
import { useState } from 'react'
const List = () => {
    const [toEdit,setToEdit]=useState({})
    const [editStatus,setEditStatus]=useState(false)
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")
    const [street, setStreet] = useState("")
    const [suite, setSuite] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [catchPhrase, setCatchPhrase] = useState("")
    const [bs, setBs] = useState("")
    const [lat,setLat]=useState("")
    const [lng,setLng]=useState("")
     const [user,setUser]=useState([])
  return (
    <mycontext.Provider value={{id,setId,name,setName,userName,setUserName,email,setEmail,phone,setPhone,website,setWebsite,street,setStreet,suite,setSuite,city,setCity,zipCode,setZipCode,companyName,setCompanyName,catchPhrase,setCatchPhrase,bs,setBs,lat,setLat,lng,setLng,user,setUser,toEdit,setToEdit,editStatus,setEditStatus}}>

    <>
    <div className='h4 text-center fs-bolder '>Show Case Your List</div>
    <div>
    <Table />
    </div>
    <div className='h4 text-center fs-bolder'>
        Make Your Changes Here
    </div>
    <div>
        <Form/>
    </div>
    <div>
        <Refresh/>
    </div>
    </>
    </mycontext.Provider>
  )
}

export default List