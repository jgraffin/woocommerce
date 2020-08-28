import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/image-tretislogo-loja.svg';
import Cart from '../molecules/cart';
import SearchForm from '../molecules/searchForm';
import MainMenu from './mainMenu';

const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);
  const [width, setWidth] = useState([0]);

  const MobileMenuButtonClose = () => {
    return (
      <button
        className="a-button a-button--menu-close"
        onClick={() => setMenuActive(false)}
      >
        <svg viewBox="0 0 24 24">
          <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </button>
    );
  };

  const MobileOnly = () => {
    let screen = useWindowWidth();
    if (screen <= 767) {
      return (
        <>
          {menuActive && <MobileMenuButtonClose />}
          {menuActive && <MainMenu class="m-main-menu--mobile" />}
          <button
            className="a-button a-button--menu-open"
            onClick={() => setMenuActive(true)}
          >
            Abrir Menu
          </button>
        </>
      );
    } else {
      return null;
    }
  };

  const useWindowWidth = () => {
    useLayoutEffect(() => {
      const updateWidth = () => setWidth(window.innerWidth);
      window.addEventListener('resize', updateWidth);
      updateWidth();
      return () => window.removeEventListener('resize', updateWidth);
    }, []);
    return width;
  };

  return (
    <>
      <header className="o-header">
        <div className="o-header__account">
          <div className="container">
            <h3>
              Olá, <span>{props.userName}</span>
            </h3>
            <Link to="/minha-conta">Minha Conta</Link>
            <Link to="/" className="a-button--logout">
              Sair
            </Link>
          </div>
        </div>
        <div className="o-header__navigation">
          <div className="container">
            <div className="m-site-name">
              <h1>
                <Link to="/">
                  <img src={logo} alt="Loja Trétis" />
                </Link>
              </h1>
            </div>
            <SearchForm />
            <Cart count="0" />
          </div>
        </div>
        <div className="o-header__menu">
          <MobileOnly />
          <MainMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
