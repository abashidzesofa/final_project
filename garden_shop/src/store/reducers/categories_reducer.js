const defaultState = [];

const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const load_categories_action = categories => ({ type: LOAD_CATEGORIES, payload: categories});

export const categories_reducer = (state = defaultState, action) => {
   if(action.type === LOAD_CATEGORIES) {
      return action.payload
   }
   
   return state
}