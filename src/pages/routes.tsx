import React, { Component, Suspense, lazy } from 'react';
import { Routes, Route} from 'react-router-dom';
import { LandingHomePage } from './main/home';
import { RoutesName } from '../utils/constant';
import NotFoundPage from '../components/common/not_found';
import { Navbar } from '../components/navbars/navbar';
import LoginPage from './auth/login';
import { useTypedSelector } from "../stateStore";

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
                        {/* <Navbar /> */}
                        <Routes>
                              {/* // Route for landing Home Page */}
                              <Route path={'/'} element={<LandingHomePage />} />

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