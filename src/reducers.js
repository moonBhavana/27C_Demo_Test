
import { DEPOSIT, CREDIT } from './action';

const initialState = {
  balance: 0
};

const reducer = (state = initialState, action) => {
  console.log(state)
  console.log(initialState)
  switch (action.type) {
    case DEPOSIT:
      console.log("Reducer deposit initial amount:"+state.balance);
      return {
        // balance: state.balance + action.amount
        ...state , balance: state.balance + action.amount
      };
    case CREDIT:
      console.log("Reducer credit initial amount:"+state.balance);
      return {
        // balance: state.balance - action.amount
        ...state , balance: state.balance - action.amount
      };
    default:
      return state;
  }
};

export default reducer;