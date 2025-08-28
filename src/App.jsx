// App.jsx
import HomePage from './Pages/HomePage'
import MovieDetails from './Pages/MovieDetails'
import Sidebar from './components/Sidebar'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { FavoriteMovieProvider } from './context/FavoriteContext'
import FavoritePage from './Pages/FavoritePage'

const Layout = () => (
  <div className='flex w-screen h-screen'>
    <div className="flex h-full group">
      <Sidebar />
      <div className='h-full w-[60px] transition-all duration-200 group-hover:w-[220px] rounded-tr-2xl rounded-br-2xl'></div>
    </div>
    <div className="flex-1 h-full overflow-auto">
      <Outlet />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movie/:id", element: <MovieDetails /> },
      { path: "favorite", element: <FavoritePage/>}
    ]
  }
]);

const App = () => <FavoriteMovieProvider><RouterProvider router={router} /></FavoriteMovieProvider>

export default App;