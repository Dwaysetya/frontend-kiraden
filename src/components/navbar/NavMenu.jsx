// navMenu.jsx
import { useState, useEffect } from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const NavMenu = ({ links = [], textColor = "text-white" }) => {
  const [activeScrollLink, setActiveScrollLink] = useState(null);
  const [clickedScrollLink, setClickedScrollLink] = useState(null);
  const location = useLocation();

  // Define duration here, or pass it as a prop if it needs to be dynamic from Navbar
  // For consistency with your ScrollLink, let's define it here.
  const SCROLL_DURATION = 500; // This should match the duration prop in ScrollLink

  useEffect(() => {
    setActiveScrollLink(null);
    setClickedScrollLink(null);
  }, [location.pathname]);

  const baseClasses = `${textColor} text-sm px-2 whitespace-nowrap transition-all duration-200`;
  const hoverClasses = `hover:underline hover:decoration-amber-500 hover:decoration-2 underline-offset-4`;
  const activeClasses = `underline decoration-amber-500 decoration-2 underline-offset-4`;

  return (
    <>
      {links.map((link) => {
        const getRouterLinkClasses = ({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : hoverClasses}`;

        const isScrollLinkCurrentlyActive =
          activeScrollLink === link.to || clickedScrollLink === link.to;

        const getScrollLinkClasses = () =>
          `${baseClasses} cursor-pointer ${
            isScrollLinkCurrentlyActive ? activeClasses : hoverClasses
          }`;

        if (link.type === "route") {
          return (
            <RouterNavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={getRouterLinkClasses}
              onClick={() => {
                setActiveScrollLink(null);
                setClickedScrollLink(null);
              }}
            >
              {link.label}
            </RouterNavLink>
          );
        }

        if (link.type === "scroll") {
          return (
            <ScrollLink
              key={link.label}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={SCROLL_DURATION} // Use the defined constant here
              onSetActive={(to) => {
                if (clickedScrollLink === to || !clickedScrollLink) {
                  setActiveScrollLink(to);
                }
              }}
              onSetInactive={(to) => {
                if (activeScrollLink === to && clickedScrollLink !== to) {
                  setActiveScrollLink(null);
                }
              }}
              className={getScrollLinkClasses()}
              onClick={() => {
                setClickedScrollLink(link.to);
                setActiveScrollLink(link.to);

                // Use SCROLL_DURATION here
                setTimeout(() => {
                  setClickedScrollLink(null);
                }, SCROLL_DURATION + 50); // Add a small buffer
              }}
            >
              {link.label}
            </ScrollLink>
          );
        }

        return null;
      })}
    </>
  );
};

export default NavMenu;
