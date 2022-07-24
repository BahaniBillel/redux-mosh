import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actionCreator';

const unsubsribe = store.subscribe(() =>
  console.log('the state has changed', store.getState())
);

console.log(store.getState());
// ADDING A BUG
store.dispatch(bugAdded('bug1'));

// RESOLVING A BUG

store.dispatch(bugResolved(1));

// REMOVING A BUG
// store.dispatch(bugRemoved(1));
