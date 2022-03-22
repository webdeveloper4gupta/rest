import { DISHES }  from '../shared/dishes';
import { PROMOTIONS }  from '../shared/promotion';
import { LEADERS }  from '../shared/leaders';
import { COMMENTS }  from '../shared/comment';
// initial configuration of my statte
export const initialState={
  
          // it means what i impost from DISHESthat comes in the dishes
          dishes:DISHES,
          comments:COMMENTS,
          leaders:LEADERS,
          promotions:PROMOTIONS
          // selectedDish:null
   
}

export const Reducer = (state = initialState, action) => {
    return state;
};