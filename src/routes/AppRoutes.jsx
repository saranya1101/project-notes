import {  Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import BasicLayout from "../layouts/BasicLayout";
import SignUp from "../pages/SignUp";

export default function AppRoutes() {
  return (
    <Routes >
        <Route path="/" element={<BasicLayout/>}>
        <Route index element={<Home />}/>

<Route path="/home" element={<Home />}/>
<Route path="/login" element={<Login />}/>
<Route path="/sign-up" element={<SignUp/>}/>
</Route>
<Route path="*" element={<NotFound/>}/>

    </Routes>
  )
}
