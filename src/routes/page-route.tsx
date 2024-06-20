import { useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './private-route';
import Automation from '../pages/automation/automation';
// import TcinProfitAndLossPage from '../pages/operations/p&l/tcinprofit-and-loss';
// import useAuth from "../../../services/hooks/useauth";


function PageRoutes() {
    // const { auth } = useAuth()


    return (
        <Router>
            <Routes> 
                {/* <Route path="/" element={<UsersLoginMain />} /> */}
                {/* <Route path="/login" element={<UsersLoginMain />} /> */}
                <Route element={
                    <PrivateRoutes
                        isAuthenticated={
                            // auth.token 
                            true
                            ? true : true}
                        redirectPath={"/"}
                    />} >
                    <Route path="/Automation" element={
                        <Automation />} />
                    {/* <Route path="/user-management" element={
                        <UserManagement />} />
                    <Route path="/user-permissions" element={
                        <UserPermission />} />
                    <Route path="/vessel-management" element={
                        <VesselManagement />
                    } />
                    <Route path="/manage-port" element={
                        <PortManagement />
                    } />
                    <Route path="/my-profile" element={<MyProfile />}
                    /> */}
                    
                </Route>
            </Routes>
        </Router>

    )
}
export default PageRoutes;

