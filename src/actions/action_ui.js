export const TOGGLE_DIMMER = 'TOGGLE_DIMMER'
export const TOGGLE_PUSHER = 'TOGGLE_PUSHER'
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN'
export const ADD_CODE_PROMO = 'ADD_CODE_PROMO'

export function toggleDimmer (visible = false) {
  return {
    type: TOGGLE_DIMMER,
    visible
  }
}
export function togglePusher (visible = false) {
  return {
    type: TOGGLE_PUSHER,
    visible
  }
}
export function setCodePromo (code_promo) {
  return {
    type: ADD_CODE_PROMO,
    code_promo
  }
}
export function toggleLogin (visible = false, login_params, state_params) {
  return {
    type: TOGGLE_LOGIN,
    visible,
    login_params,
    state_params
  }
}