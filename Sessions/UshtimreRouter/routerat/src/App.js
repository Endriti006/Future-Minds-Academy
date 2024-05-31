import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Spring from "./Pages/Spring";
import Fall from "./Pages/Fall";
import Winter from "./Pages/Winter"
import AllSeason from "./Pages/AllSeaons"
import Summer from "./Pages/Summer";

const router = createBrowserRouter([
  {path: '', element: <Fall />},
  {path: '/spring', element: <Spring />},
  {path: '/summer', element: <Summer />},
  {path: '/fall', element: <Fall />},
  {path: '/winter', element: <Winter />}
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;