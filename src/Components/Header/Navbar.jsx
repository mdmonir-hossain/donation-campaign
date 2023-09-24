import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center z-10">
      <div>
        <img src="https://i.ibb.co/tMQqy49/Logo.png" />
      </div>

      <div className="flex gap-3">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 underline "
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 underline "
              : ""
          }
        >
          Donation
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 underline "
              : ""
          }
        >
          Statistics
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
