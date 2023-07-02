import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const RestrictedRoute = ({component: Component, redirectTo = '/'}) => {
const isLogin = useSelector(state => state.contacts.isLogin)

return isLogin ? <Navigate to={redirectTo}/> : <Component/>
}