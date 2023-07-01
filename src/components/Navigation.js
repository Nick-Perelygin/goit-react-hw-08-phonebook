import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import UserMenu from '../components/UserMenu/UserMenu';

const Navigation = () => {
    const isLogin = useSelector(state => state.contacts.isLogin);

    return (
        <div>
            <nav style={{marginBottom: '100px'}}>
                <NavLink to="/" style={{marginRight: '20px'}}>Home</NavLink>
                <NavLink to="register" style={{marginRight: '20px'}}>Register</NavLink>
                <NavLink to='contacts'>Contacts</NavLink>
                {!isLogin ? <NavLink to='login' style={{marginLeft: '20px'}}>Login</NavLink> 
                : <UserMenu/>}
            </nav>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}

export default Navigation