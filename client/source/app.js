import financeReducer from './reducers/finance_reducer';
import createStore from './store/create_store';
import financeApp from './views/finance_app';
import financeAppOutput from './views/finance_app_output';

const store = createStore( financeReducer );
store.subscribe( financeAppOutput.render );

financeApp.setStore( store )
financeAppOutput.setStore( store );

window.onload = function() {
  financeApp.render();
  financeAppOutput.render();
}
