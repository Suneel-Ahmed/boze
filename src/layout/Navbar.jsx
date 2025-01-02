import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="navbar  h-20">
     
      <div className="navbar-start  w-full lg:items-center lg:justify-between hidden lg:flex">
      <a className="btn btn-ghost text-white text-xl">BOZE COIN</a>
        <ul className="menu menu-horizontal gap-[30px] lg:items-center text-white px-1">
          <li>
           Blog
          </li>
          <li>
            Icons
          </li>
          <li>
            Icons
          </li>
          <li>
            Icons
          </li>
        </ul>
      </div>
      <div className="navbar-start relative lg:hidden  w-full flex justify-between items-center">
      <a className="btn btn-ghost text-white text-xl uppercase">Boze Coin</a>
        <div className="dropdown   ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost   lg:hidden"
            onClick={toggleDropdown}
          >
           <h1 className='text-white my-auto'>Nav Btn</h1>
          </div>
        </div>
          {isDropdownOpen && (
            <ul
              className="menu absolute top-[50px] menu-vertical dropdown-content text-white  rounded-box z-[1] bg-black   mt-3 w-full min-w-max p-2 shadow"
            >
              <li>
                <a className="active">Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          )}
      </div>
    </div>
  );
};

export default Navbar;
