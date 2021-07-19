import { admin_router, basket_router, device_router, login_router, register_router, shop_router } from './Constants'
import AdminPanel from './pages/adminpanel'
import Basket from './pages/basket'
import Auth from './pages/auth'
import deviceItem from './pages/shop/devices/deviceItem'
import Shop from './pages/shop/Shop'

export const authRouter = [{
    path: admin_router,
    component: AdminPanel
},{
    path: basket_router,
    component: Basket
}]

export const publicRotes = [{
    path: device_router+'/:id',
    component: deviceItem
},{
    path: login_router,
    component: Auth
},{
    path: register_router,
    component: Auth
},{
    path: shop_router,
    component: Shop
}]