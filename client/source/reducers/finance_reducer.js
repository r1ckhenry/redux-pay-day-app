import moment from 'moment';

let setBalance = ( action, state ) => {
  return Object.assign( {}, state, { balance: +action.balance } );
}

let setDate = ( action, state ) => {
  return Object.assign( {}, state, { date: action.date } );
}

let calculate = ( action, state ) => {
  let now = moment( Date.now() );
  let then = moment( state.date );
  let daysRemaining = then.diff( now, 'days' );
  let dailySpend = ( state.balance / daysRemaining ).toFixed(2);

  return Object.assign( {}, state, { dailySpend: dailySpend } );
}

const financeReducer = ( state = { balance: 0, date: '' }, action ) => {

  const functionMap = {
    "SET_BALANCE": setBalance,
    "SET_DATE": setDate,
    "CALCULATE": calculate
  }

  const handler = functionMap[action.type];

  if (handler) {
    return handler( action, state )
  } else {
    return state;
  }

}

module.exports = financeReducer;
