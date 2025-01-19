import React, { useState } from 'react';
import Nav from '../data/navData';
import { Link } from 'react-router-dom';
import { FaTelegram , FaYoutube , FaInstagram  } from "react-icons/fa";
import { FaSquareThreads , FaBarsStaggered , FaXmark  } from "react-icons/fa6";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

  return (
    <div className="navbar px-[clamp(20px,4.3vw,150px)] z-[9999] h-24">
     
      <div className="navbar-start  w-full lg:items-center lg:justify-between hidden lg:flex">
      <Link onClick={handleClick} to={'/'} className='text-white text-2xl font-bold quicksand '  > 
      <img src="/images/logo.png" alt="boze" className='w-[75px] h-auto' />
      </Link>
     
        <ul className="menu menu-horizontal quicksand  text-2xl lg:items-center text-white px-1">
          {
            Nav && Nav?.map((val, key)=>(
            <li key={key}  >
                {
                    val.title === 'telegram' ? <Link to={val?.link} target='_blank' className='text-white' ><FaTelegram/></Link> :
                    val.title === 'youtube' ? <Link to={val?.link} target='_blank' className='text-white' ><FaYoutube/> </Link> :
                    val.title === 'instagram' ? <Link to={val?.link} target='_blank' className='text-white' ><FaInstagram/></Link> :
                    val.title === 'threads' ? <Link to={val?.link} target='_blank' className='text-white' ><FaSquareThreads/> </Link> :
          <Link to={val?.link} onClick={handleClick} className='text-white' > {val?.title}</Link>
                }
          </li>
            ))
          }

        </ul>
      </div>
      <div className="navbar-start relative lg:hidden   w-full flex justify-between items-center">
      <Link to={'/'} onClick={handleClick} className='text-white text-2xl font-bold quicksand '  > 
      <img src="/images/logo.png" alt="boze" className='w-[50px] h-auto' />
      </Link>
        <div className="dropdown   ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost   lg:hidden"
            onClick={toggleDropdown}
          >
           <h1 className='text-white text-[25px] my-auto'>{!isDropdownOpen ? <FaBarsStaggered/> : <FaXmark /> }</h1>
          </div>
        </div>
          {isDropdownOpen && (
            <ul
              className="menu  absolute top-[50px] menu-vertical space-y-2  dropdown-content text-white  rounded-box z-[1] bg-black   mt-3 w-full min-w-max p-2 shadow"
            >

          <li  >
          <Link to={'/'} onClick={handleClick} className='text-white' > Blogs</Link>
          </li>
          <li >
          <div className='flex gap-3 justify-center'>
          {
            Nav && Nav?.filter(val => val.title !== 'Blog')?.map((val, key)=>(
            <div key={key}  >
           {
                    val.title === 'telegram' ? <Link to={val?.link} target='_blank' className='max-md:text-[20px] text-white' ><FaTelegram/></Link> :
                    val.title === 'youtube' ? <Link to={val?.link} target='_blank' className='max-md:text-[20px] text-white' ><FaYoutube/> </Link> :
                    val.title === 'instagram' ? <Link to={val?.link} target='_blank' className=' max-md:text-[20px] text-white' ><FaInstagram/></Link> :
                    val.title === 'threads' ? <Link to={val?.link} target='_blank' className='max-md:text-[20px] text-white' ><FaSquareThreads/> </Link> :
          <Link to={val?.link} onClick={handleClick} className='text-white' > {val?.title}</Link>
                }
          </div>
            ))
          }

          </div>
          </li>
              
            </ul>
          )}
      </div>
    </div>
  );
};

export default Navbar;
