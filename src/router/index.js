import HomeLayout from "../layout/Home"
import UserLayout from "../layout/User"
import HomeRoutes from "./home"
import UserRoutes from "./user"

const DefaultRoutes = [
  { path: '/account/', element: <UserLayout />, children: [...UserRoutes] },
  { path: '/', element: <HomeLayout />, children: [...HomeRoutes] },
]

export default DefaultRoutes