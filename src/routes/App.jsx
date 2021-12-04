import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/global.css";

import Layout from "../containers/Layout";

import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import Home from "../pages/Home";
//import SendEmail from "../pages/SendEmail";
//import NewPassword from "../pages/NewPassword";
//import MyAccount from "../pages/MyAccount";
//import CreateAccount from "../pages/CreateAccount";
//import Checkout from "../pages/Checkout";
//import Orders from "../pages/Orders";
//import NotFound from "../pages/NotFound";
import AppContext from '../context/AppContex';
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route key="1" path="/" element={<Home />} />
            <Route key="2" path="/login" element={<Login />} />
            <Route key="3" path="/recovery-password" element={<RecoveryPassword />} />
            {/*}
            <Route key="4" path="/send-email" element={<SendEmail />} />
            <Route key="5" path="/new-password" element={<NewPassword />} />
            <Route key="6" path="/account" element={<MyAccount />} />
            <Route key="7" path="/signup" element={<CreateAccount />} />
            <Route key="8" path="/checkout" element={<Checkout />} />
            <Route key="9" path="/orders" element={<Orders />} />
            <Route key="10" path="*" element={<NotFound />} />
            {*/}
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
