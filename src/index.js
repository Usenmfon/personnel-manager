import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes>
          <Route exact path="/" element={<Login />} />
            <Route  path="app" element={<App />}>
              <Route path="" element={<Homepage />} />
              <Route path="staff/single" element={<SingleStaff />} />
              <Route path="staff/add" element={<AddStaff />} />
              <Route path="staff/all" element={<AllStaff />} />
              <Route path="login" element={<Login />} />
              <Route path="listing" element={<Listing />}>
                
              </Route>
              <Route path="listing/farming" element={<Farming />} />
              <Route path="success" element={<Signupsuccess />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
