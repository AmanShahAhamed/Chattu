import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Componenet/Loader";
import "./App.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import ConditionalHeader from "./Componenet/Header";
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));
const Home = lazy(() => import("./pages/Home"));
const ForgetPassword = lazy(() => import("./pages/ForgetPassword"));
const NewPassword = lazy(() => import("./pages/NewPassword"));
function App() {
  return (
    <>
      <BrowserRouter>
        <ConditionalHeader>
          <Suspense fallback={<Loader />} />
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget/password" element={<ForgetPassword />} />
            <Route path="/create/password" element={<NewPassword />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </ConditionalHeader>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
