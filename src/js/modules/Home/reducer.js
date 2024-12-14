const initialState = {
  products: [],
  car: []
}

const reducer = (state, action) => {
  const actions = {
    INITIAL_LOAD: () => {
      return {
        ...state,
        products: action.payload
      }
    },

    ADD_TO_CAR: () => {
      return {
        ...state,
        car: action.payload
      }
    },

    REMOVE_FROM_CAR: () => {
      return {
        ...state,
        car: action.payload
      }
    }
  }

  const fn = actions[action.type];
  return fn ? fn() : state;
}

export { initialState, reducer };
