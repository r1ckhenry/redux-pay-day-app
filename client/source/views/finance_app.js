let financeApp = {

  store: null,

  el: () => { return document.body },

  setStore: ( store ) => { financeApp.store = store; },

  events: {
    '#balanceInput keyup': 'setBalance',
    '#dateInput change': 'setDate'
  },

  setEvents: () => {
    for ( let key in financeApp.events ) {
      let [ element, listener ] = key.split( ' ' );
      let documentEl = document.querySelector( element );
      documentEl.addEventListener( listener , financeApp[financeApp.events[key]] );
    }
  },

  setBalance: (e) => {
    financeApp.store.dispatch( { type: 'SET_BALANCE', balance: e.target.value } );
  },

  setDate: (e) => {
    financeApp.store.dispatch( { type: 'SET_DATE', date: e.target.value } );
  },

  render: () => {
    financeApp.el().innerHTML =
      `<h1>Pay Day Calculator</h1>
      <label for="balanceInput">Monthly remaining total:</label>
      <input type="number" name="balanceInput" id="balanceInput" placeholder="Enter balance" />
      <label for="dateInput">Pay day:</label>
      <input type="date" name="dateInput" id="dateInput" /><div id="displayView"></div>`

    financeApp.setEvents()
  }
}

module.exports = financeApp;
