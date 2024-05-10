import React, { Component, Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { LandingHomePage } from './main/home';
import { RoutesName } from '../utils/constant';
import FallbackLoading from '../components/common/fallback';
import NotFoundPage from '../components/common/not_found';
import { Navbar } from '../components/navbars/navbar';
import LoginPage from './auth/login';
import { useAppDispatch, useTypedSelector } from "../stateStore";
const LandingContactPage = lazy(() => import('./main/contact'));
const LandingOurTeam = lazy(() => import('./main/our_team'));
const LandingOurTeamDetails = lazy(() => import('./main/team_details'));
const LandingOurServices = lazy(() => import('./main/our_service'))
const LandingOurServiceDetails = lazy(() => import('./main/service_details'));

const RouteHanding = () => {
      const navigate = useNavigate();
      const { isLogin,adminDetails, error} = useTypedSelector((state) => state.Devronins);

      if (!isLogin) {
            return (
                  <Routes>
                        // Route for landing Home Page
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
                              // Route for landing Home Page
                              <Route path={RoutesName.Home} element={<LandingHomePage />} />
                              // Route for landing Home Page
                              <Route path={RoutesName.Contact} element={<Suspense fallback={<FallbackLoading />}><LandingContactPage /></Suspense>} />
                              <Route path={RoutesName.OurTeam} element={<Suspense fallback={<FallbackLoading />}><LandingOurTeam /></Suspense>} />
                              <Route path={RoutesName.OurTeamDetails} element={<Suspense fallback={<FallbackLoading />}><LandingOurTeamDetails /></Suspense>} />
                              <Route path={RoutesName.OurServices} element={<Suspense fallback={<FallbackLoading />}><LandingOurServices /></Suspense>} />
                              <Route path={RoutesName.OurServiceDetails} element={<Suspense fallback={<FallbackLoading />}><LandingOurServiceDetails /></Suspense>} />
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