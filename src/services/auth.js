import api from './api'

export const loginApi = (body) => api.post('oauth/login', body).then((response) => response.data)

export const checkTokenApi = (body) => api.post('', body).then((response) => response.data)
