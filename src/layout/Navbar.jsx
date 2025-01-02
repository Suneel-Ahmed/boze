import React, { useState } from 'react';
import Nav from '../data/navData';
import { Link } from 'react-router-dom';
import { FaTelegram , FaYoutube , FaInstagram  } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="navbar  h-20">
     
      <div className="navbar-start  w-full lg:items-center lg:justify-between hidden lg:flex">
      <Link to={'/'} className='text-white text-2xl font-bold quicksand '  > BOZE COIN</Link>
     
        <ul className="menu menu-horizontal quicksand  text-2xl lg:items-center text-white px-1">
          {
            Nav && Nav?.map((val, key)=>(
            <li key={key}  >
                {
                    val.title === 'telegram' ? <Link to={val?.link} target='_blank' className='text-white' ><FaTelegram/></Link> :
                    val.title === 'youtube' ? <Link to={val?.link} target='_blank' className='text-white' ><FaYoutube/> </Link> :
                    val.title === 'instagram' ? <Link to={val?.link} target='_blank' className='text-white' ><FaInstagram/></Link> :
                    val.title === 'threads' ? <Link to={val?.link} target='_blank' className='text-white' ><FaSquareThreads/> </Link> :
          <Link to={val?.link} className='text-white' > {val?.title}</Link>
                }
          </li>
            ))
          }

        </ul>
      </div>
      <div className="navbar-start relative lg:hidden  w-full flex justify-between items-center">
      <Link to={'/'} className='text-white font-bold text-xl quicksand' > BOZE COIN</Link>
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
              className="menu absolute top-[50px] menu-vertical space-y-5 dropdown-content text-white  rounded-box z-[1] bg-black   mt-3 w-full min-w-max p-2 shadow"
            >
              {
            Nav && Nav?.map((val, key)=>(
            <li key={key}  >
          <Link to={val?.link} className='text-white' > {val?.title}</Link>
          </li>
            ))
          }
            </ul>
          )}
      </div>
    </div>
  );
};

export default Navbar;
