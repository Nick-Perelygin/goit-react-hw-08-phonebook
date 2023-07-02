import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
const isLogin = useSelector(state => state.contacts.isLogin)
const isRefreshing = useSelector(state => state.contacts.isRefreshing)
const shouldRedirect = !isRefreshing && !isLogin 

return shouldRedirect ? <Navigate to={redirectTo}/> : <Component/>
}