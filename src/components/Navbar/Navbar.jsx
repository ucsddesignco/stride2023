import { useState } from 'react';
import NavbarSVG from '../../svgs/NavbarSVG/index';
import './styles.scss';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const checkOverflow = (open) => {
    if (open) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <nav>
      <a href="">
        <NavbarSVG />
      </a>
      <div className="right">
        {/* prettier-ignore */}
        <button aria-expanded={open} className='mobile-button' onClick={() => {setOpen((prev) => {checkOverflow(prev); return !prev})}}>
          <svg className='hamburger-icon' width="35" height="23" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.945312 22.6044H34.2729V18.9013H0.945312V22.6044ZM0.945312 13.3467H34.2729V9.64365H0.945312V13.3467ZM0.945312 0.385986V4.08905H34.2729V0.385986H0.945312Z" fill="currentColor"/>
          </svg>
          <svg className='close-icon' width="28" height="28" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M165.49 148.51C167.744 150.764 169.011 153.822 169.011 157.01C169.011 160.198 167.744 163.256 165.49 165.51C163.236 167.764 160.178 169.031 156.99 169.031C153.802 169.031 150.744 167.764 148.49 165.51L85.0001 102L21.4901 165.49C19.2357 167.744 16.1782 169.011 12.9901 169.011C9.80194 169.011 6.7444 167.744 4.49006 165.49C2.23571 163.236 0.969238 160.178 0.969238 156.99C0.969238 153.802 2.23571 150.744 4.49006 148.49L68.0001 85L4.51005 21.49C2.25571 19.2357 0.989239 16.1782 0.989239 12.99C0.989239 9.80193 2.25571 6.74438 4.51005 4.49004C6.76439 2.2357 9.82193 0.969227 13.0101 0.969227C16.1982 0.969227 19.2557 2.2357 21.5101 4.49004L85.0001 68L148.51 4.48004C150.764 2.2257 153.822 0.959228 157.01 0.959229C160.198 0.959229 163.256 2.2257 165.51 4.48004C167.764 6.73438 169.031 9.79192 169.031 12.98C169.031 16.1682 167.764 19.2257 165.51 21.48L102 85L165.49 148.51Z" fill="currentColor"/>
          </svg>
        </button>

        <ul >
          <li >
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/companies">Companies</NavLink>
          </li>
          <li>
            <a to="https://docs.google.com/document/d/18pBI2_xM0AN4_Gdy3LuPqXXy9NISa8Yj3DeDRbeWT-E" target='_blank' rel="noreferrer">Schedule</a>
          </li>
          <li>
            <a to="/">Apply</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
