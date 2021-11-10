import { Types} from './film.types'

export const ActionCreators = {
    recommendation: (recommendation) => ({ type: Types.RECOMMENDATION, payload: { recommendation } })
  }
