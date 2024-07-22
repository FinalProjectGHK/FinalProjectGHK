import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styles from "./App.module.css";
import Root from "./Root";
import Home from "./navbar_routers/Home";
import Cart from "./navbar_routers/Cart";
import Login from "./navbar_routers/Login";
import Register from "./navbar_routers/Register";
import Account from "./navbar_routers/Account";
import Record from "./navbar_routers/Record";
import Location from "./navbar_routers/Location";
import About from "./navbar_routers/About";
import BulletinBoard from "./navbar_routers/BulletinBoard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/account", element: <Account /> },
      { path: "/record", element: <Record /> },
      { path: "/location", element: <Location /> },
      { path: "/about", element: <About /> },
      { path: "/bulletinBoard", element: <BulletinBoard /> },
    ],
  },
]);
function App() {
  return (
    <>
      <div className={styles.App}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}
export default App;
