import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/about">
        <li>About</li>
      </NavLink>
      <NavLink to="/skills">
        <li>Skills</li>
      </NavLink>
      <NavLink to="/projects">
        <li>Projects</li>
      </NavLink>
      <NavLink to="/contact">
        <li>Contact</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar  bg-[#4D4944] md:px-12 lg:px-24 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0b0b0b] rounded-box w-52 text-white font-bold"
          >
            {links}
          </ul>
        </div>
        <div className="flex md:flex-col items-center gap-x-2">
          <div className="text-3xl md:text-3xl text-black font-extrabold flex">
            <h1>Na</h1>
            <h1 className="text-[#FF4500] animate-bounce hover:animate-none">
              d
            </h1>
            <h1>im</h1>
          </div>
          <span className="text-white text-2xl font-bold animate-pulse">
            .protfolio
          </span>
        </div>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1 flex gap-3 lg:gap-5 font-bold text-base text-white">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
