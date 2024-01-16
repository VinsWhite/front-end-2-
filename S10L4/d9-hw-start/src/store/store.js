//questo è lo store dello stato, un vero e proprio contenitore
import { createStore } from 'redux';
import rootReducer from '../reducer';

const store = createStore(rootReducer); //questo store viene creato con createStore (anche se dopo vedremo un nuovo metodo, perché questo è deprecato)
//creiamo lo store assegnandolo alla costante store

//esportiamo lo store
export default store;
