import AddStaff from "../components/AddStaff"
import AllStaff from "../components/AllStaff"
import UserDashboard from "../components/Dashboard"
import SingleStaff from "../components/SingleStaff"


const UserRoutes = [
  {path:'',element: <UserDashboard />},
  {path:'staff',element: <AllStaff />},
  {path:'staff/single',element: <SingleStaff />},
  {path:'staff/add',element: <AddStaff />},
  
]

export default UserRoutes