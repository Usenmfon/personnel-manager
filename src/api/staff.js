import { storage } from "./mixin";

const STAFF_KEY = 'staff'


export async function getStaffAPI() {
  return storage.getItems(STAFF_KEY)
}


export async function addStaffAPI(data) {
  let staff = await getStaffAPI()
  if (!staff.length) {
    staff = []
  }
  staff.push(data)
  storage.setItem(STAFF_KEY, staff)
  return staff
}