import { initialState } from './initState';

const incDecRED =(state = initialState, action)=>{

    switch(action.type){
        case "INC": return state+1;
        case "DEC": return state-1; 
        case "RESET": return state=0;
        case "MUL": return state*5;
        case "DIV": return state/5;
        default : return state;
    }

}

export default incDecRED;