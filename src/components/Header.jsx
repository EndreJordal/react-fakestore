import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 flex flex-col items-center">
      <NavLink to="/">
        <h1 className="text-3xl font-bold tracking-wide">FakeStore ©</h1>
      </NavLink>
      <Navbar />
    </header>
  );
};

export default Header;
