import * as actionType from '../actions/actionTypes';

const counterReducer=(state=0, action) =>{
    let newState;
switch (action.type) {
    case actionType.INCREASE_COUNTER:
    return (newState=state+action.payload)
    case actionType.DECREASE_COUNTER:
        return (newState=state-action.payload)
    case actionType.INCREASE_BY_TWO_COUNTER:
        return (newState=state+action.payload)
    default:
        return  state;
  }
};

export default  counterReducer;