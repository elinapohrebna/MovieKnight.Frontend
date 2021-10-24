import { Types } from './user.types'

const INITIAL_STATE = {
    user: null
}


const userReducer = ( state = INITIAL_STATE, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case Types.LOGIN:
            console.log('login', action.payload.user);
            sessionStorage.setItem('user', JSON.stringify(action.payload.user.userInfo));
      return {
            ...state,
           user: action.payload.user,
      }
      default:{
        return state // We return the default state here
}
    }

}


export default userReducer;
