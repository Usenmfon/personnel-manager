import {  useRoutes } from 'react-router-dom';
import { ThemeProvider } from "@mui/system";
import { theme } from "./components/theme";

import DefaultRoutes from './router';

function App() {
  const routes = useRoutes(DefaultRoutes)

  return (
    <ThemeProvider theme={theme}>
      {routes}
  </ThemeProvider>
  );
}

export default App;
