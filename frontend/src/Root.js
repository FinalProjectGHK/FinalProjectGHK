import { Outlet } from "react-router";
import Header from "./components/Header";
const Root = ({ isLoggedIn }) => {
  return (
    <div>
      <Header />
      <Outlet isLoggedIn={isLoggedIn} />
    </div>
  );
};
export default Root;
