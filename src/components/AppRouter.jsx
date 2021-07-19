import { observer } from 'mobx-react-lite'
import React,{ useContext } from 'react'
import {Switch, Route, Redirect } from 'react-router-dom'
import { Context } from '..'
import { shop_router } from '../Constants'
import { authRouter, publicRotes } from '../rotes'

const AppRouter = observer( ()=>{
    const {user} = useContext(Context)

    return(
        <Switch>
            {user.isAuth && authRouter.map(({path, component}) =>{
                return <Route key={path} path={path} component = {component} exact/>
            }
            )}
            {publicRotes.map(({path, component}) =>
                <Route key={path} path={path} component = {component} exact/>
            )}
            <Redirect to={shop_router}/>
        </Switch>
    )
})

export default AppRouter

