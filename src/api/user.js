import axios from 'axios'
import { parseError } from './mixin'


export const getProfileAPI = async (user) => {
    try {
        const response = await axios.get(`/user/${user._id}`)
        if (response.status === 200) {
            return response.data.data
        }
        return parseError(response)
    } catch (error) {
        console.log(error)
        return parseError(error)
    }
}

export const getUsersAPI =  async () => {
    try {
        const response = await axios.get('/users')
        if(response.status === 200) {
            return response.data.data
        }
        return parseError(response)
    } catch (error) {
        // console.log(error)
        return parseError(error)
    }
}