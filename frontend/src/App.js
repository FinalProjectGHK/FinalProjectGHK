import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./Root";
import Favorite from "./main_routers/Favorite";
import Rice from "./main_routers/Rice";
import Dessert from "./main_routers/Dessert";
import Drinks from "./main_routers/Drinks";
import Pasta from "./main_routers/Pasta";
import Cart from "./navbar_routers/Cart";
import Noodle from "./main_routers/Noodle";
import Login from "./navbar_routers/Login";
import Register from "./navbar_routers/Register";
import Account from "./navbar_routers/Account";
import Record from "./navbar_routers/Record";
import Location from "./navbar_routers/Location";
import About from "./navbar_routers/About";
import Vegan from "./main_routers/Vegan";
import Whatsapp from "./components/Whatsapp";

const router = createBrowserRouter([
  {
    // favorite, rice, pasta, noodle, dessert, drink, vegan,
    path: "/",
    element: <Root />,
    children: [
      { path: "/favorite", element: <Favorite /> },
      { path: "/rice", element: <Rice /> },
      { path: "/pasta", element: <Pasta /> },
      { path: "/noodle", element: <Noodle /> },
      { path: "/vegan", element: <Vegan /> },
      { path: "/dessert", element: <Dessert /> },
      { path: "/drinks", element: <Drinks /> },
    ],
  },
  { path: "/cart", element: <Cart /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/account", element: <Account /> },
  { path: "/record", element: <Record /> },
  { path: "/location", element: <Location /> },
  { path: "/about", element: <About /> },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
        <Whatsapp />
      </header>
    </div>
  );
}

export default App;
