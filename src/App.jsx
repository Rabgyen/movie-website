// App.jsx
import HomePage from './Pages/HomePage'
import MovieDetails from './Pages/MovieDetails'
import Sidebar from './components/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Layout = () => (
  <div className='flex w-screen h-screen'>
    <div className="flex h-full group">
      <Sidebar />
      <div className='h-full w-[60px] transition-all duration-200 group-hover:w-[220px] rounded-tr-2xl rounded-br-2xl'></div>
    </div>
    <div className="flex-1 h-full overflow-auto">
      {/* This is where routed content will go */}
      <Outlet />
    </div>
  </div>
);

import { Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movie/:id", element: <MovieDetails /> },
    ]
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;