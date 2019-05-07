import React from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends React.Component {
    render(){
        return (
            <header>
                <NavLink exact to="/" className="home-page">Home</NavLink>
                <NavLink to="/smurf-form" className="add-smurf">Add</NavLink>
                {/* <NavLink to="/smurf-form" className="update-smurf">Update</NavLink> */}
            </header>
        )
    }
}

export default NavBar;