import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import './App.css';

// Define routes for createBrowserRouter
const routes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/home',
    element: <Home />,
  },
];

// Create the router
const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      {/* Use RouterProvider to render routes */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
