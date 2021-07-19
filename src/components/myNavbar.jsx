import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Context } from '..'
import {login_router, shop_router, admin_router} from '../Constants'


export default observer( function MyNavbar (){
    const {user} = useContext(Context)

    const logOut = () => {
      user.setIsAuth(false)
      user.setUser({})
    }
    
    return(
      <Navbar bg="primary" variant="dark">
        <NavLink style = {{fontSize: "26px",color:'white'}} to={shop_router} className="mr-auto fw-bolder">
          Best Electronics
        </NavLink>
        {!user.isAuth?
          <Nav style = {{color:'white'}} className="ml-auto ">
            <NavLink  to = {login_router}> 
              <Button 
              className = "ml-3px" 
              variant = {"outline-light"}>
                Authorization  
              </Button>
            </NavLink>
          </Nav>
        :
        <Nav style = {{color:'white'}} className="ml-auto ">
          <NavLink to = {admin_router}>
            <Button
              className = "pr-2 mr-3px" 
              variant = {"outline-light"} 
            >
              Admin panel
            </Button>
          </NavLink>
            <NavLink  to = {login_router}>
              <Button  
              onClick = {()=>{
                logOut()
              }} 
              className = "ml-4" 
              variant = {"outline-light"}>
                Logout 
              </Button> 
            </NavLink> 
        </Nav>
        }
      </Navbar>
    )
}
)