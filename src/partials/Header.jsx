import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import logo from '../images/nerd_logo.png'

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="NERD">
              <img src={logo} width='100vh'></img>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
            {/* 1st level: hover */}
            <Dropdown title="MakeNRace">
                {/* 2nd level: hover */}
                <li>
                  <Link to="/makenrace" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">Sobre</Link>
                </li>
                <li>
                  <Link to="/participacao" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">Condições de participação</Link>
                </li>
              </Dropdown>
              <li>
                <Link to="/projetos" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">Projetos</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">Sobre</Link>
              </li>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signin" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Entrar na conta</Link>
              </li>
              <li>
                <Link to="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Quero participar</Link>
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
              <li className="py-2 my-2 border-t border-b border-gray-700">
                  <span className="flex text-gray-300 py-2">MakeNRace</span>
                  <ul className="pl-4">
                    <li>
                      <Link to="/makenrace" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Sobre</Link>
                    </li>
                    <li>
                      <Link to="/participacao" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Condições de participação</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/projetos" className="flex text-gray-300 hover:text-gray-200 py-2">Projetos</Link>
                </li>
                <li>
                  <Link to="/sobre" className="flex text-gray-300 hover:text-gray-200 py-2">Sobre</Link>
                </li>
                
                <li>
                  <Link to="/signin" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Entrar na conta</Link>
                </li>
                <li>
                  <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Quero participar</Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
