import { addStaffAPI, getStaffAPI } from '../api/staff'

export const staffType = ["Acadamic", "Non Acadamic", 'Retired']

export async function createStaff(data) {
  data.age = new Date().getFullYear() - new Date(data.dob).getFullYear()
  data.id = new Date().getMilliseconds
  if(data.age >60 ){
    data.type = staffType[2]
  }
  return addStaffAPI(data)
}

export async function getAllStaff() {
  return getStaffAPI()
}
