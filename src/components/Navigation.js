import React, { useState } from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";

function Navigation() {

  //Internal state of the component with variable of showMenu and it's SETTER name of setShowMenu
  const [showMenu, setShowMenu] = useState(false);

  // a function of it's own made use in the nav icon
  function toggleShowMenu() {
    setShowMenu(!showMenu);
  }

  function disableMenu() {
    setShowMenu(false);
  }

  //className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
  //mask className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
  let menu;
  let menuMask;

  if (showMenu === true) {
    menu = <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
      The Menu
    </div>

    menuMask = <div className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
    onClick={disableMenu}>

    </div>
  }

    return (
        <nav>
            <FontAwesomeIcon
                icon={faBars}
                onClick={toggleShowMenu}
            />
          {menuMask}
          {menu}

        </nav>
    )
}

export default Navigation
