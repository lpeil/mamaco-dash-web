import initial from './initial'

export default function reducer(state = initial, action) {
  switch (action.type) {
    case 'SetToken':
      return { ...state, token: action.token }
    case 'SetUser':
      return { ...state, user: action.user }
    default:
      return state
  }
}
