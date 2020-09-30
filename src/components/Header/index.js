import React from 'react'

import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/gnome-todo-icon.png"
                width="30"
                height="30"
                sticky="top"
                className="d-inline-block align-top"
                />{' '}
                Todo App
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header