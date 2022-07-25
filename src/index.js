import store from './store/store';
import * as actions from './store/bugs';

store.subscribe(() => console.log('the state has changed'));

store.dispatch(actions.bugAdded('bug1'));
store.dispatch(actions.bugAdded('bug2'));
store.dispatch(actions.bugAdded('bug3'));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());
