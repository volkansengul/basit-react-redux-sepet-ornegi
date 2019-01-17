import {combineReducers} from 'redux';
import BasketReducer from './reducers/BasketReducer';

const Reducers = combineReducers({
    basket: BasketReducer
});

export default Reducers;