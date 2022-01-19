import { storage, parseResponse } from "./mixin"
import { getProfileAPI, getUsersAPI } from '../api/user'





class ProfileManager {


  getUsers = async (data) => {
    const response = await getUsersAPI(data)
    return parseResponse(response)
  } 


  getProfile = async (user) => {
    let profile = storage.getData('profile')

    if (profile?._id ) {
      return profile
    }
    try{
      const response = await getProfileAPI(user)
      if(response?.fullname){
        storage.writeData(response,'profile')
      }
      return parseResponse(response)
    }
    catch(e){
      return null
    }
  }
}



export default ProfileManager