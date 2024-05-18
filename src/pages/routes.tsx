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
import { UserAddPage } from './main/user/add-user';
import { UserEditPage } from './main/user/edit-user';
import { UserPage } from './main/user';
import { CategoryPage } from './main/category';
import { CategoryAddPage } from './main/category/add-category';
import { CategoryEditPage } from './main/category/edit-category';
import { EventPage } from './main/event';
import { EventAddPage } from './main/event/add-event';
import { EventEditPage } from './main/event/edit-event';
import { TagPage } from './main/tag';
import { TagAddPage } from './main/tag/add-tag';
import { TagEditPage } from './main/tag/edit-tag';
import { RoomPage } from './main/room';
import { RoomAddPage } from './main/room/add-room';
import { RoomEditPage } from './main/room/edit-room';
import { AboutPage } from './main/about';
import { AboutAddPage } from './main/about/add-about';
import { AboutEditPage } from './main/about/edit-about';
import { ExperiencePage } from './main/experience';
import { ExperienceAddPage } from './main/experience/add-experience';
import { ExperienceEditPage } from './main/experience/edit-experience';
import { PrivateRoute } from '../components/common/private-route';


const RouteHanding = () => {
      const { isLogin } = useTypedSelector((state) => state.Admin)
            return (
                  <div className='w-full min-h-screen bg-accent'>
                        {localStorage.getItem('accessToken')&&<Navbar />}
                        <Routes>
                              <Route path="/" element={<LoginPage/>} />

                              {/* // Route for landing Home Page */}
                              <Route path={RoutesName.Dashboard} element={<PrivateRoute><DashboardPage /></PrivateRoute>} />

                              {/* Service Section */}
                              <Route path={RoutesName.Services} element={<PrivateRoute><ServicePage/></PrivateRoute>} />
                              <Route path={RoutesName.ServiceAdd} element={<PrivateRoute><ServiceAddPage/></PrivateRoute>} />
                              <Route path={RoutesName.ServiceEdit} element={<PrivateRoute><ServiceEditPage/></PrivateRoute>} />

                               {/* Property Section */}
                               <Route path={RoutesName.Properties} element={<PrivateRoute><PropertyPage/></PrivateRoute>} />
                              <Route path={RoutesName.PropertyAdd} element={<PrivateRoute><PropertyAddPage/></PrivateRoute>} />
                              <Route path={RoutesName.PropertyEdit} element={<PrivateRoute><PropertyEditPage/></PrivateRoute>} />

                              {/* User Section */}
                              <Route path={RoutesName.Users} element={<PrivateRoute><UserPage/></PrivateRoute>} />
                              <Route path={RoutesName.UserAdd} element={<PrivateRoute><UserAddPage/></PrivateRoute>} />
                              <Route path={RoutesName.UserEdit} element={<PrivateRoute><UserEditPage/></PrivateRoute>} />
                              
                               {/* Category Section */}
                               <Route path={RoutesName.Categories} element={<PrivateRoute><CategoryPage/></PrivateRoute>} />
                              <Route path={RoutesName.CategoryAdd} element={<PrivateRoute><CategoryAddPage/></PrivateRoute>} />
                              <Route path={RoutesName.CategoryEdit} element={<PrivateRoute><CategoryEditPage/></PrivateRoute>} />
                              
                               {/* Event Section */}
                               <Route path={RoutesName.Events} element={<PrivateRoute><EventPage/></PrivateRoute>} />
                              <Route path={RoutesName.EventAdd} element={<PrivateRoute><EventAddPage/></PrivateRoute>} />
                              <Route path={RoutesName.EventEdit} element={<PrivateRoute><EventEditPage/></PrivateRoute>} />

                                {/* Event Section */}
                              <Route path={RoutesName.Tags} element={<PrivateRoute><TagPage/></PrivateRoute>} />
                              <Route path={RoutesName.TagAdd} element={<PrivateRoute><TagAddPage/></PrivateRoute>} />
                              <Route path={RoutesName.TagEdit} element={<PrivateRoute><TagEditPage/></PrivateRoute>} />

                               {/* Room Section */}
                               <Route path={RoutesName.Rooms} element={<PrivateRoute><RoomPage/></PrivateRoute>} />
                              <Route path={RoutesName.RoomAdd} element={<PrivateRoute><RoomAddPage/></PrivateRoute>} />
                              <Route path={RoutesName.RoomEdit} element={<PrivateRoute><RoomEditPage/></PrivateRoute>} />

                               {/* About Section */}
                               <Route path={RoutesName.Abouts} element={<PrivateRoute><AboutPage/></PrivateRoute>} />
                              <Route path={RoutesName.AboutAdd} element={<PrivateRoute><AboutAddPage/></PrivateRoute>} />
                              <Route path={RoutesName.AboutEdit} element={<PrivateRoute><AboutEditPage/></PrivateRoute>} />

                               {/* Experience Section */}
                               <Route path={RoutesName.Experiences} element={<PrivateRoute><ExperiencePage/></PrivateRoute>} />
                              <Route path={RoutesName.ExperienceAdd} element={<PrivateRoute><ExperienceAddPage/></PrivateRoute>} />
                              <Route path={RoutesName.ExperienceEdit} element={<PrivateRoute><ExperienceEditPage/></PrivateRoute>} />

                              {/* Not Found route */}
                              <Route path="/not-found" element={<NotFoundPage />} />
                              <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                  </div>
            )
}

export { RouteHanding }
// OurLandingPortfolioDetails