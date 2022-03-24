// import { COMMENTS } from '../shared/comment';
// // this is reducer function
// export const Comments = (state = COMMENTS, action) => {
//     switch (action.type) {

//         default:
//           return state;
//       }
// };

import { COMMENTS } from '../shared/comment';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            // here i add comment id
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            // we used concat function here as we not want to changew previous state 
            return state.concat(comment);

        default:
          return state;
      }
};