import React, { useEffect, useState } from 'react';
import 'chart.js/auto'; // for registering all charts in web
import { RouteHanding } from './pages/routes';
import MouseCursorBackground from './components/animate_cursor';
import { Toaster } from './components/ui/toaster';
import { Navbar } from './components/navbar/navbar';
import { useTypedSelector } from './stateStore';



function App() {
  const { isLogin} = useTypedSelector((state) => state.Admin);
  return (
    <div className="
    relative
    w-full">
      <MouseCursorBackground/>
      {isLogin && <Navbar/>}
      <RouteHanding/>
      <Toaster/>
    </div>
  );
}

export default App;
