import { createStore } from 'redux';
import Reducer from './bugs';

const store = createStore(Reducer);

export default store;
