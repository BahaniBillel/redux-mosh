//Actions Types
const BUG_ADDED = 'bugAdded';
const BUG_REMOVED = 'bugRemoved';
const BUG_RESOLVED = 'bugResolved';

// Actions Creators
export function bugAdded(discreption) {
  return {
    type: BUG_ADDED,
    payload: {
      discreption,
    },
  };
}

export function bugRemoved(id) {
  return {
    type: BUG_REMOVED,
    payload: {
      id, // OR id: id
    },
  };
}

export function bugResolved(id) {
  return {
    type: BUG_RESOLVED,
    payload: {
      id: id,
    },
  };
}

//   Reducer

let lastId = 0;
const Reducer = (state = [], action) => {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          discreption: action.payload.discreption,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
};

export default Reducer;
