import AdminLayout from "../layout/admin"
import HomeLayout from "../layout/Home"
import UserLayout from "../layout/User"
import AdminRoutes from "./admin"
import RequireAdmin from "./guard/admin"
import RequireAuth from "./guard/user"
import HomeRoutes from "./home"
import UserRoutes from "./user"

const DefaultRoutes = [
  { path: '/user/', element: <RequireAuth element={UserLayout} />, children: [...UserRoutes] },
  { path: '/admin/', element: <RequireAdmin element={AdminLayout} />, children: [...AdminRoutes] },
  { path: '/', element: <HomeLayout />, children: [...HomeRoutes] },
]

export default DefaultRoutes