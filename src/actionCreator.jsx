import * as actions from './actionsTypes';

// BUG ADDED
export function bugAdded(discreption) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      discreption,
    },
  };
}

// BUG REMOVED

export function bugRemoved(id) {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id, // OR id: id
    },
  };
}

// BUG RESOLVED
export function bugResolved(id) {
  return {
    type: actions.BUG_RESOLVED,
    payload: {
      id: id,
    },
  };
}
