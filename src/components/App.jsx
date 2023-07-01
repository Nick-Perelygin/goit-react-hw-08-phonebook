import {fetchCurrent} from 'redux/contactOperation';
import { useDispatch } from 'react-redux';
import {useEffect, lazy} from 'react';
import { Routes, Route} from "react-router-dom";
import Navigation from './Navigation';

const Register = lazy(() => import('../pages/register'))
const Contacts = lazy(() => import('../pages/contacts'))
const Login = lazy(() => import('../pages/login'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Home = lazy(() => import('../pages/home'))

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
          <Route path="register" element={<Register/>}>
          </Route>
          <Route path="contacts" element={<Contacts/>}>
          </Route>
          <Route path="login" element={<Login/>}>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
};

export default App