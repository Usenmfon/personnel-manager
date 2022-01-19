import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes>
          <Route exact path="/" element={<Login />} />
          <Route  path="dashboard/*" element={<Dashboard />}></Route>
            <Route  path="app" element={<App />}>
              <Route path="" element={<Homepage />} />
              <Route path="count_down" element={<Countdowntimer />} />
              <Route path="signup" element={<Signup />} />
              
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
=======
      <App />
>>>>>>> 24a6830698d8c32eab06f0e6f25615de7e4a827e
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
