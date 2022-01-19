import {  useRoutes } from 'react-router-dom';


import { AuthProvider } from "./context/auth";

import { ThemeProvider } from "@mui/system";
import { theme } from "./components/theme";

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
