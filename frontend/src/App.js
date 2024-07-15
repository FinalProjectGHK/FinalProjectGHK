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

const router = createBrowserRouter([
  {
    path: '/', element: <Root />,
    children: [
      { path: '/sushi', element: <Sushi/> },
      { path: '/roll', element: <Roll/> },
      { path: '/soup', element: <Soup/> },
      { path: '/side', element: <Side/> },
      { path: '/dessert', element: <Dessert/> },
      { path: '/drinks', element: <Drinks/> },
      { path: '/cart', element: <Cart/> }
    ]
  }
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
