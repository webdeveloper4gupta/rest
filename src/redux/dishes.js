// this i will delete in the redux-thunk exercise
// import { DISHES } from '../shared/dishes';
// this i wiill import in the redux-thunk
import * as ActionTypes from './ActionTypes';
// export const Dishes = (state = DISHES, action) => {
//     switch (action.type) {
//         default:
//           return state;
//       }
// };

export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            // ...state means i not update my previous state but only i make newx state where i make modification in the state
            // return immutable state
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};