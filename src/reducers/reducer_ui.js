import { TOGGLE_DIMMER, TOGGLE_PUSHER } from './../actions/action_ui'
import { ADD_CODE_PROMO, TOGGLE_LOGIN } from '../actions/action_ui'

const INITIAL_STATE = {
  dimmer_visibility: false,
  pusher_visibility: false,
  login_visibility: false,
  code_promo : ''
}

export default function (state = INITIAL_STATE, action) {

  //console.log('reducer_users | action : ' , action);

  switch (action.type) {
    case TOGGLE_DIMMER:
      return {...state, dimmer_visibility: action.visible}

    case TOGGLE_PUSHER:
      return {...state, pusher_visibility: action.visible}

    case TOGGLE_LOGIN:
      return {...state, login_visibility: action.visible, login_params: action.login_params, state_params: action.state_params}

    case ADD_CODE_PROMO:
      return {...state, code_promo: action.code_promo}

    default:
      return state
  }

}