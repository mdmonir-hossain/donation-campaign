import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <div>
          <nav className="flex justify-between container mx-auto items-center py-6 px-6">
          <div><img className="w-3/4" src="https://i.ibb.co/tMQqy49/Logo.png" /></div>
      <div className="flex gap-5">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          Donation
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
          }
        >
          Statistics
        </NavLink>
              </div>
              </nav>
    </div>
  );
};

export default Navbar;
