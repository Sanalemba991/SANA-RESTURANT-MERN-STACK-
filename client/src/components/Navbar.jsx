import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as RouterLink } from 'react-router-dom';  // React Router Link for navigation

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <> 
      <nav>
        <div className="logo">SANA RESTURANT</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
                 {/* Logout Button */}
                 <RouterLink to="/" className="logoutBtn">
                 <button className="menuBtn">Log Out</button>
          </RouterLink>
         

  
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
