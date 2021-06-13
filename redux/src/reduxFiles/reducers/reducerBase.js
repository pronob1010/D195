import incDecRED from './incDec';

import { combineReducers } from 'redux';
import conntactRED from './contactRed';

const rootReducer = combineReducers({
    incDecRED,
    conntactRED,
     
})

export default rootReducer;