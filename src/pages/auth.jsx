import { Container, Card, Form, Button } from "react-bootstrap"
import {NavLink, useLocation, useHistory} from 'react-router-dom'
import { login_router, register_router, shop_router } from "../Constants"
import {registration, login} from '../API/authAPI'
import React, {useState, useContext} from 'react'
import { observer } from "mobx-react-lite"
import { Context } from "../"


export default observer(function Auth() {
  const history = useHistory()
  const {user} = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === login_router
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 async function register(email, password) {
    try{
      if(!isLogin){
        const userDate = await registration(email, password)
        user.setUser(userDate)
        history.push(shop_router)
      }else{
        const userDate = await login(email, password)
        user.setUser(userDate)
        history.push(shop_router)
      }  
      user.setIsAuth(true)
    }catch(e){
      alert(e.response.data.massage)
    }
 }


  return (
    <Container 
    className = "d-flex justify-content-center align-items-center" 
    style = {{height: window.innerHeight-55}}
    >
      <Card style = {{width: "600px", backgroundColor: 'lightgray'}} className = "p-5" >
        <h2 className = "m-auto" >{ isLogin? 'Authorization' : 'Registration'}</h2>
        <Form type = "email" className = "d-flex flex-column" >
          
          <Form.Control 
            onChange = {e=> setEmail(e.target.value)}
            value = {email}
            type = "email"
            className = "mt-2 mb-2"
            placeholder = "enter your email..."
          />
          <Form.Control 
            onChange = {e=> setPassword(e.target.value)}
            value = {password}
            placeholder = "enter your password..."
            type = "password"
          />
          <div>
            {isLogin?
              <NavLink to = {register_router}> Register here </NavLink>:
              <NavLink to = {login_router}> login here </NavLink>
            }
          </div>
            {isLogin?
              <Button 
                variant = {"outline-success"} 
                onClick = {()=>register(email, password)} 
                className = "mt-2"
              >Login
              </Button>:
              <Button 
                variant = {"outline-success"} 
                onClick = {()=>register(email, password)}  
                className = "mt-2"
              >
                Register
              </Button>
            }
        </Form>
      </Card>
    </Container>
  )
})