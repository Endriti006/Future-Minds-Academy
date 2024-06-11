import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Counter from './views/Counter'

import ToggleVisibility from './views/ToggleVisibility';
import InputField from './views/InpurtField';
import Handling from './views/Handling';
import Array from './views/Array';


const router = createBrowserRouter([
  {path: '/', element: <Counter />},
  {path: '/toggle-visibility', element: <ToggleVisibility />},
  {path: '/input-field', element: <InputField />},
  {path: '/handling', element: <Handling />},
  {path: '/array', element: <Array />}

]);

function App() {


  return (
    <>
     <h1>React Hooks</h1>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
