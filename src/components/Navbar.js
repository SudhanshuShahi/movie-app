import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
        <div style={{display:'flex',padding:'0.5',marginLeft:'3rem',marginTop:'1.6rem'}}>
        <Link to="/" style={{ textDecoration: "none", fontFamily: "Times-New-Roman", color: "black" }}><h1>Movies_App</h1></Link>   

          <Link to="/favourites" style={{textDecoration:"none",fontFamily:"Times-New-Roman",color:"black"}}><h2 style={{marginLeft:'4rem',paddingTop:'0.3rem'}}>Favourites</h2></Link>                
               
      </div>
       
    )
  }
}
