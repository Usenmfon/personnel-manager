import { Route, Routes, useRoutes } from 'react-router-dom';


import { AuthProvider } from "./context/auth";

import { ThemeProvider } from "@mui/system";
import { theme } from "./components/theme";

import Homepage from "./components/Homepage";
import Signupsuccess from "./components/Signupsuccess";
import Listing from "./components/Listing"
import Farming from "./category/Farming";
import Login from "./components/Login"
import SingleStaff from "./components/SingleStaff";
import AddStaff from "./components/AddStaff";
import AllStaff from "./components/AllStaff";

import DefaultRoutes from './router';

function App() {
  const routes = useRoutes(DefaultRoutes)

  return (
    <ThemeProvider theme={theme}>
    <AuthProvider>
      {routes}
    </AuthProvider>
  </ThemeProvider>
  );
}

export default App;
