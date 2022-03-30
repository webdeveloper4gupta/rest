import {createStore,combineReducers,applyMiddleware} from 'redux';
// i import applymiddleware in the redux-thunk exercise
// this is for one reducer
// import { Reducer, initialState } from './reducer'

// after spliting and combining of reducer
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
// i import thunk and logger in the redux-thunk exercise
import thunk from 'redux-thunk';
import logger from 'redux-logger';
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
        }),
        // this sexond parameter i add in the react ,thunk exercise
        applyMiddleware(thunk,logger)
    );

    return store;
}