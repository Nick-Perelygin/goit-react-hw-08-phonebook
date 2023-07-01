import { useSelector, useDispatch } from 'react-redux';
import {fetchLogout} from 'redux/contactOperation';

export default function UserMenu() {
    const dispatch = useDispatch()
    const name = useSelector(state => state.contacts.user.name);

  return (        
    <>                                                   
        <div style={{display: 'inline', marginLeft: '20px'}}>
            <p style={{display: 'inline', marginRight: '20px', fontWeight: 'bold'}}>Welcome, {name}</p>
            <button type="button" onClick={()=>dispatch(fetchLogout())}>LogOut</button>
        </div>
    </>
  )
};