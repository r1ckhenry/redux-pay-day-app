let financeAppOutput = {

  store: null,

  el: () => { return document.querySelector( '#displayView' ); },

  setStore: ( store ) => { financeAppOutput.store = store; },

  events: {
    "#calculateBtn click": { type: 'CALCULATE' }
  },

  setEvents: () => {
    for ( let key in financeAppOutput.events ) {
      let [ element, listener ] = key.split( ' ' );
      let documentEl = document.querySelector( element );
      documentEl.addEventListener( listener , (e) => {
        financeAppOutput.store.dispatch( financeAppOutput.events[key] );
      })
    }
  },

  render: () => {
    let state = financeAppOutput.store.getState();
    financeAppOutput.el().innerHTML =
      `<div class="output-balance">
        You have £<span>${state.balance}</span> remaining until <span>${state.date}</span>
      </div>
      <button id="calculateBtn">Calculate</button>
      <div>Per day spend: ${ state.dailySpend ? '£'+state.dailySpend : 'no data' }</div>`

    financeAppOutput.setEvents();
  }

}

module.exports = financeAppOutput;
