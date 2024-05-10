import React, { useEffect, useState } from 'react';
import 'chart.js/auto'; // for registering all charts in web
import { RouteHanding } from './pages/routes';
import MouseCursorBackground from './components/animate_cursor';
import { Toaster } from './components/ui/toaster';



function App() {

  return (
    <div className="
    relative
    w-full">
      <MouseCursorBackground/>
      <RouteHanding/>
      <Toaster/>
    </div>
  );
}

export default App;
