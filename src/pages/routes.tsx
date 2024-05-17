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

                              {/* User Section */}
                              <Route path={RoutesName.Users} element={<UserPage/>} />
                              <Route path={RoutesName.UserAdd} element={<UserAddPage/>} />
                              <Route path={RoutesName.UserEdit} element={<UserEditPage/>} />
                              
                               {/* Category Section */}
                               <Route path={RoutesName.Categories} element={<CategoryPage/>} />
                              <Route path={RoutesName.CategoryAdd} element={<CategoryAddPage/>} />
                              <Route path={RoutesName.CategoryEdit} element={<CategoryEditPage/>} />
                              
                               {/* Event Section */}
                               <Route path={RoutesName.Event} element={<EventPage/>} />
                              <Route path={RoutesName.EventAdd} element={<EventAddPage/>} />
                              <Route path={RoutesName.EventEdit} element={<EventEditPage/>} />

                                {/* Event Section */}
                              <Route path={RoutesName.Tags} element={<TagPage/>} />
                              <Route path={RoutesName.TagAdd} element={<TagAddPage/>} />
                              <Route path={RoutesName.TagEdit} element={<TagEditPage/>} />

                               {/* Room Section */}
                               <Route path={RoutesName.Rooms} element={<RoomPage/>} />
                              <Route path={RoutesName.RoomAdd} element={<RoomAddPage/>} />
                              <Route path={RoutesName.RoomEdit} element={<RoomEditPage/>} />

                               {/* About Section */}
                               <Route path={RoutesName.Abouts} element={<AboutPage/>} />
                              <Route path={RoutesName.AboutAdd} element={<AboutAddPage/>} />
                              <Route path={RoutesName.AboutEdit} element={<AboutEditPage/>} />

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