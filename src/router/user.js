import AddStaff from "../components/AddStaff"
import AllStaff from "../components/AllStaff"
import UserDashboard from "../components/Dashboard"
import SingleStaff from "../components/SingleStaff"
import RetiredStaff from "../components/RetiredStaff"


const UserRoutes = [
  {path:'',element: <UserDashboard />},
  {path:'staff',element: <AllStaff />},
  {path:'staff/retired',element: <RetiredStaff />},
  {path:'staff/single',element: <SingleStaff />},
  {path:'staff/add',element: <AddStaff />},
  
]

export default UserRoutes