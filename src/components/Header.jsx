import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold tracking-wide">FakeStore ©</h1>
      <Navbar />
    </header>
  );
};

export default Header;
