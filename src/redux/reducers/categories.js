

const initialState = {
    items:[]
  };
  
  export default function(state = initialState, action) {
      
    switch (action.type) {
      case 'LOAD_CATEGORIES_SUCCESS': {
        return {...state, items: action.payload}
      }
      default:
        return state;
    }
  }
  