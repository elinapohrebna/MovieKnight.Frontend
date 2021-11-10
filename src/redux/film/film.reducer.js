import { Types } from './film.types'

const INITIAL_STATE = {
    recommendation: null,
}

const filmReducer = (state = INITIAL_STATE, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case Types.RECOMMENDATION:
            console.log('action', action);
            console.log('recommendation', action.payload.recommendation);
            return {
            ...state,
                recommendation: action.payload.recommendation,
      }
      default:{
        return state // We return the default state here
}
    }

}


export default filmReducer;
