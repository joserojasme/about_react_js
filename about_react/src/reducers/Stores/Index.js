import datos from './Datos';
import utils from './Utils';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    datos,
    utils
})

export default rootReducer;