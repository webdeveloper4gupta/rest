import {createStore,combineReducers} from 'redux';
// this is for one reducer
// import { Reducer, initialState } from './reducer'

// after spliting and combining of reducer
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

// way to make redux store
export const ConfigureStore = () => {
// way of creating redux store when only one reducer 

    // const store = createStore(
    //     Reducer, // reducer
    //     initialState, // our initialState
    // );

    // way of creating redux store after the spliting ands combinig reducers
    
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}