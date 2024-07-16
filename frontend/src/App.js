import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './Root';
import Sushi from './Sushi';
import Roll from './Roll';
import Dessert from './Dessert';
import Drinks from './Drinks';
import Soup from './Soup';
import Cart from './Cart';
import Side from './Side';
import Login from './Login';
import Register from './Register';
import Record from './Record';
import Location from './Location';
import About from './About';


const router = createBrowserRouter([
  {
    path: '/', element: <Root />,
    children: [
      { path: '/sushi', element: <Sushi/> },
      { path: '/roll', element: <Roll/> },
      { path: '/soup', element: <Soup/> },
      { path: '/side', element: <Side/> },
      { path: '/dessert', element: <Dessert/> },
      { path: '/drinks', element: <Drinks/> }
    ]
  },
  { path: '/cart', element: <Cart/> },
  { path: '/login', element: <Login/> },
  { path: '/register', element: <Register/> },
  { path: '/record', element: <Record/> },
  { path: '/location', element: <Location/> },
  { path: '/about', element: <About/> },
])

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
