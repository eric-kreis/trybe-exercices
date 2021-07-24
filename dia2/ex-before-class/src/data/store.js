import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer,
window.__REDUX__DEVTOOLS__EXTENSION__ && window.__REDUX__DEVTOOLS__EXTENSION__());

export default store;