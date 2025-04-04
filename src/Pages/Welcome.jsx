import React from 'react'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="wrapper-welcome container-fluid">
      <div className="row position-absolute top-50 start-50 translate-middle">
        <div className="col-12 text-center">
          <h1 className=" fs-bolder">Welcome to Data Center</h1>
         <p><NavLink className="h6 text-danger" to={"/list"}>Click Here Too Enter</NavLink></p>
        </div>
      </div>
    </div>
  )
}

export default Welcome