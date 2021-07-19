import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import MyNavbar from './components/myNavbar'
import { observer } from 'mobx-react-lite'
import { Context } from '.'
import { checkAuth } from './API/authAPI'
import { Container, Spinner } from 'react-bootstrap'

export default observer( function App() {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    checkAuth().then(data=>{
      user.setUser(data.name)
      user.setIsAuth(true)
    }).finally(()=>setLoading(false))
  },[])

  if(loading){
    return <Container style = {{height:window.innerHeight}} className = "d-flex align-items-center justify-content-center">
      <Spinner animation="border" variant="info" />Loading...
    </Container>
  }
  
  return (
    <BrowserRouter>
      <MyNavbar />
      <AppRouter />
    </BrowserRouter>
  )
})