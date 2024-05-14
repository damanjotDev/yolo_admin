import React, { Component, Suspense, lazy } from 'react';
import { Routes, Route} from 'react-router-dom';
import { DashboardPage } from './main/dashboard';
import { RoutesName } from '../utils/constant';
import NotFoundPage from '../components/common/not_found';
import LoginPage from './auth/login';
import { useTypedSelector } from "../stateStore";
import { Navbar } from '../components/navbar/navbar';
import { ServicePage } from './main/service';
import { ServiceAddPage } from './main/service/add-service';
import { ServiceEditPage } from './main/service/edit-service';
import { PropertyPage } from './main/property';
import { PropertyAddPage } from './main/property/add-property';
import { PropertyEditPage } from './main/property/edit-property';


const RouteHanding = () => {
      const { isLogin } = useTypedSelector((state) => state.Admin);

      if (!isLogin) {
            return (
                  <Routes>
                        {/* // Route for landing Home Page */}
                        <Route path="/" element={<LoginPage/>} />
                        {/* Not Found route */}
                        <Route path="/not-found" element={<NotFoundPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                  </Routes>
            )
      }
      else {
            return (
                  <div className='w-full min-h-screen bg-accent'>
                        <Navbar />
                        <Routes>
                              {/* // Route for landing Home Page */}
                              <Route path={RoutesName.Dashboard} element={<DashboardPage />} />

                              {/* Service Section */}
                              <Route path={RoutesName.Services} element={<ServicePage/>} />
                              <Route path={RoutesName.ServiceAdd} element={<ServiceAddPage/>} />
                              <Route path={RoutesName.ServiceEdit} element={<ServiceEditPage/>} />

                               {/* Property Section */}
                               <Route path={RoutesName.Properties} element={<PropertyPage/>} />
                              <Route path={RoutesName.PropertyAdd} element={<PropertyAddPage/>} />
                              <Route path={RoutesName.PropertyEdit} element={<PropertyEditPage/>} />

                              {/* Not Found route */}
                              <Route path="/not-found" element={<NotFoundPage />} />
                              <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                  </div>
            )
      }
}

export { RouteHanding }
// OurLandingPortfolioDetails