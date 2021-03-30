import axios from 'axios'
import qs from 'qs'

const api = axios.create({
  baseURL: process.env.API_URL,
  paramsSerializer: (params) => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const authToken = urlParams.get('auth_token')
    if (authToken) {
      params = { ...params, auth_token: authToken }
    }
    return qs.stringify(params)
  },
})

api.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8'
api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default api
