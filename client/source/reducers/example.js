const initialState = {
  data: []
};

function exampleReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SAMPLE_ACTION':
      return Object.assign({}, state, {
        data: action.payload.data
      });
    default:
      return state;
  }
}

module.exports = exampleReducer;
