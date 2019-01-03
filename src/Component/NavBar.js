import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';
// import { Header, Image } from 'semantic-ui-react'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'lavender',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = props => {
  return (
    <div>
    <NavLink to="/" exact style={link} activeStyle={{ background: 'grey'}}>Home</NavLink>

    <NavLink to="/login" exact style={link} activeStyle={{ background: 'grey' }}>Login</NavLink>

        <div className="icon-header" style={{link}} >
          {props.username}
        </div>
    </div>

  )
}

export default NavBar;
