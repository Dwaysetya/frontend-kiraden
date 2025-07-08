import { NavLink } from "react-router-dom";

const NavMenu = ({ links = [], textColor = "text-white" }) => {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.label}
          to={link.to}
          className={({ isActive }) =>
            `${textColor} text-sm px-2 whitespace-nowrap transition-all duration-200 ${
              isActive
                ? "underline decoration-amber-500 decoration-2 underline-offset-4"
                : "hover:underline hover:decoration-amber-500 hover:decoration-2 hover:underline-offset-4"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
};

export default NavMenu;
