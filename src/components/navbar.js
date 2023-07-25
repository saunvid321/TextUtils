import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    
    
    
        
        
    
  return (
    <div>
        <nav className="navbar navbar-expand-lg " style={props.color} >
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">{props.title} </Link>


        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about} </Link>
            </li>
            
          </ul>
         
          <form className="form-inline my-2 my-lg-0 mx-2">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        <div className="form-check form-switch">
                <input onClick={props.toggleStyle} className="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" />
                <label className="form-check-label "   for="mySwitch">{props.modeName} </label>
        </div>
        

    
        
      </nav>
      </div>
      
  )
};
