import { useEffect, useReducer, useState } from "react";
import { reducer, initialState } from "./reducer.js";
import data from './mockdata.js';

const useHome = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const [ swiperInstancePLP, setSwiperInstancePLP ] = useState(null);

  useEffect(() => {
    dispatch({ type: 'INITIAL_LOAD', payload: data.pages });
  }, []);

  const states = {
    products: state.products,
    swiperInstancePLP,
    car: state.car
  };

  const actions = {
    onAddToCar: (item) => {
      const car = [ ...state.car ];
      const itemIndex = car.findIndex(product => product.id === item.id);


      let updatedCar  = [ ...state.car ]
      if (itemIndex >= 0) {
        updatedCar[itemIndex] = {
          ...updatedCar[itemIndex],
          quantity: updatedCar[itemIndex].quantity + 1
        }
      } else {
        updatedCar.push({
          ...item,
          quantity: 1
        });
      }

      dispatch({ type: 'ADD_TO_CAR', payload: updatedCar })
    },
    onRemoveFromCar: (item) => {
      let updatedCar = [ ...state.car ];
      const newUpdateCar = updatedCar.filter((product) => product.id != item.id);

      dispatch({ type: 'REMOVE_FROM_CAR', payload: newUpdateCar })
    }
  };

  return {
    actions: {
      ...actions,
      setSwiperInstancePLP
    },
    states
  }
};

export default useHome;
