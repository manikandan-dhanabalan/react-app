//import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/list">List</Link></li>
            </ul>
        </div>  
        <div>
            <Outlet/>
        </div>      
    </>
  )
}

export default Layout