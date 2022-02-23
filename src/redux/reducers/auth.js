

const initialState = {
  token: null
};

export default function(state = initialState, action) {
    
  switch (action.type) {
    case 'USER_LOGIN_SUCCEEDED': {
      const token = action.payload;
      var res = {...state, token}
      return res;
    }
    default:
      return state;
  }
}
