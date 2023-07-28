import "./index.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io"
import { useState } from "react";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
    <div className="navBar">
      <div className="nameAndLogo">
        <h2>Classico</h2>
      </div>
      <div className="menuItems">
        <div className="menuLinks">
          <Link to="/">Blogs</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/todo">Todo</Link>
          <Link to="/resume">Resume</Link>
        </div>
        <div className="hamBurger">
          <h1 onClick={() => setOpenMenu(!openMenu)}>
            {!openMenu?<GiHamburgerMenu />:<IoIosCloseCircle/>}
          </h1>
        </div>
      </div>
    </div>
    {openMenu && (
        <div className="hamBurgerMenu">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/resume">Todo</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
