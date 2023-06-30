import { useDispatch} from 'react-redux';
import {filterContact} from 'redux/filterSlise';
import { FilterInput } from "./Filter.styled";

const Filter = () => {
  const dispatch = useDispatch()

  return(
    <label>Find contacts by name
    <FilterInput type="text" onChange={(e) => dispatch(filterContact(e))}/>
    </label>
  )
}

export default Filter