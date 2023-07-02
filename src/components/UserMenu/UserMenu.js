import { useSelector, useDispatch } from 'react-redux';
import {fetchLogout} from 'redux/contactOperation';
import Button from '@mui/material/Button';

export default function UserMenu() {
    const dispatch = useDispatch()
    const name = useSelector(state => state.contacts.user.name);

  return (        
    <>                                                   
        <div style={{display: 'inline', marginLeft: '20px'}}>
            <p style={{display: 'inline', marginRight: '20px', fontWeight: 'bold'}}>Welcome, {name}</p>
            <Button type="button" onClick={()=>dispatch(fetchLogout())}>LogOut</Button>
        </div>
    </>
  )
};