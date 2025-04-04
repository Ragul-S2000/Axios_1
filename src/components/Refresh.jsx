import React from 'react'
import { NavLink } from 'react-router-dom'

const Refresh = () => {

const handleReload = () => {
    window.location.reload()
}

  return (
    <div className=' mt-5'>
  <NavLink className="ms-5 h5" to="/">Refresh the App</NavLink>
  <NavLink className="position-absolute end-0 me-5 h5" onClick={handleReload}>Refresh this page </NavLink>
   </div>
  )
}

export default Refresh