import {fetchCurrent} from 'redux/contactOperation';
import { useDispatch } from 'react-redux';
import {useEffect, lazy} from 'react';
import { Routes, Route} from "react-router-dom";
import Navigation from './Navigation';
import { RestrictedRoute } from './RestrictedRoute';
import {PrivateRoute} from './PrivateRoute'

const Register = lazy(() => import('pages/Register'))
const Contacts = lazy(() => import('pages/Contacts'))
const Login = lazy(() => import('pages/Login'))
const NotFound = lazy(() => import('pages/NotFound'))
const Home = lazy(() => import('pages/Home'))

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrent());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        marginLeft: '40px',
        fontSize: 16,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="register" element={<RestrictedRoute component = {Register} redirectTo='/contacts'/>}/>
          <Route path="contacts" element={<PrivateRoute component = {Contacts} redirectTo='/login'/>}/>
          <Route path="login" element={<RestrictedRoute component = {Login} redirectTo='/contacts'/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
};

export default App