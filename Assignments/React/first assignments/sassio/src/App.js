import React from 'react';
import './fma-general.css';
import './fma-responsive.css';
import './style-responsive.css';
import './style.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';


import Home from './Pages/Home';
import About from './Pages/About';


const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />}
]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;