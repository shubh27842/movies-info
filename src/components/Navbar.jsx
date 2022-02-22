import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const [ path, setPath] = useState("")

  useEffect(()=>{
    setPath(window.location.pathname)
  },[window.location])
  
  return(
    <nav>
      {
        path === "/detail" ?
        <div className="d-flex align-items-center">
        <Link to="/"><ArrowBackIcon sx={{color: "#000"}} /></Link> 
        <p className="mb-0 fs-5 mx-3" style={{color: "#4a4a4a", fontWeight: "500"}}>Movie Details</p>
        </div>
        :
        <div className="searchBox">
          <SearchIcon sx={{color: "#9b9b9b"}} />
          <input type="text" placeholder="Search" className="searchInput" />
      </div>
      }
      
      <Link to="/" style={{color: "#000"}}><HomeIcon  /></Link>
  </nav>    
  )
}

export default Navbar;