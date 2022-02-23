

const initialState = {
    posts:[]
  };
  
  export default function(state = initialState, action) {
      
    switch (action.type) {
      case 'LOAD_POSTS_SUCCESS': {
        const posts = action.payload instanceof Array ? action.payload : [action.payload];
        debugger;
        var res = {...state, posts}
        console.log(res);
        return res;
      }
      default:
        return state;
    }
  }
  