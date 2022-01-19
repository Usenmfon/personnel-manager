import axios from 'axios'

export const SERVER_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : 'https://sapapay.herokuapp.com/api'

export default function init() {
    axios.defaults.baseURL = SERVER_URL
    axios.defaults.withCredentials = false
}