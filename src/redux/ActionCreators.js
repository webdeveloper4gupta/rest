// it means import all things as ActionTypes  from ActionTypes.js file
import * as ActionTypes from './ActionTypes';

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