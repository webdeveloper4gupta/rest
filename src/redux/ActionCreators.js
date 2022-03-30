// it means import all things as ActionTypes  from ActionTypes.js file
import * as ActionTypes from './ActionTypes';
// i place this in the redux thunk
import { DISHES } from '../shared/dishes';
// import { baseUrl } from '../shared/baseUrl';
// this  function create action object
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    // payload contains the data that is need to tranfer
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
// this i will amke in the react-redux-thunk exercise
// used to fetch the dishes
// function inside function
// example of redux-thunk
export const fetchDishes = () => (dispatch) => {
// it means the dishloading is true and loader will display
    dispatch(dishesLoading(true));
// after 2ms below function run

// this i remove in the fetch api concept
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);


    // this idd in the fetch api concept
    // return fetch(baseUrl + 'dishes')
    // .then(response => response.json())
    // .then(dishes => dispatch(addDishes(dishes)));
}

// return type
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});
// return type and payload
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});
// return type and payload
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

// export const fetchComments = () => (dispatch) => {    
//     return fetch(baseUrl + 'comments')
//     .then(response => response.json())
//     .then(comments => dispatch(addComments(comments)));
// };

// export const commentsFailed = (errmess) => ({
//     type: ActionTypes.COMMENTS_FAILED,
//     payload: errmess
// });

// export const addComments = (comments) => ({
//     type: ActionTypes.ADD_COMMENTS,
//     payload: comments
// });

// export const fetchPromos = () => (dispatch) => {
    
//     dispatch(promosLoading());

//     return fetch(baseUrl + 'promotions')
//     .then(response => response.json())
//     .then(promos => dispatch(addPromos(promos)));
// }

// export const promosLoading = () => ({
//     type: ActionTypes.PROMOS_LOADING
// });

// export const promosFailed = (errmess) => ({
//     type: ActionTypes.PROMOS_FAILED,
//     payload: errmess
// });

// export const addPromos = (promos) => ({
//     type: ActionTypes.ADD_PROMOS,
//     payload: promos
// });