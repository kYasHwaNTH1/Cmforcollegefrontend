import { useContext, useEffect, useState } from "react";
import "./App.css";
import Issuedisplay from "./components/Issuedisplay";
import Nabafter from "./components/Nabafter";
import Nabbefore from "./components/Nabbefore";
import Changepassword from "./screens/Changepassword";
import Footer from "./screens/Footer";
import HomePage from "./screens/HomePage";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'

import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { counterToken } from "./statemag";
import Postissue from "./screens/Postissue";
import Myissues from "./screens/Myissues";
import Admingettech from "./screens/Admingettech";
import Eachtechnician from "./screens/Eachtechnician";

function App() {



  return (
    <RecoilRoot>
      <Router>
        <NavbarSwitch />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/changepassword" element={
            <PrivateRouter>
              <Changepassword />
            </PrivateRouter>
          } />
          <Route path="/postissue" element={
            <PrivateRouter>
              <Postissue />
            </PrivateRouter>
          } />
          <Route path="/myissues"
            element={
              <PrivateRouter>
                <Myissues />
              </PrivateRouter>
            }
          />
          <Route path="/admintechies"
            element={
              <PrivateRouter>
                <Admingettech />
              </PrivateRouter>
            }
          />
          <Route path="/admintechies/:id"
            element={
              <PrivateRouter>
                <Eachtechnician />
              </PrivateRouter>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </RecoilRoot>

  );
}
function NavbarSwitch() {
  const token = useRecoilValue(counterToken);
  return (
    <div >
      {token ? <Nabafter /> : <Nabbefore />}
    </div>
  );
}

function PrivateRouter({ children }) {
  const token = useRecoilValue(counterToken);
  const navigate = useNavigate()

  return token ? children : <Navigate to="/signin" />;

}

export default App;
