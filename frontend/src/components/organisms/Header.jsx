import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/image-tretislogo-loja.svg';
import Cart from '../molecules/cart';
import SearchForm from '../molecules/searchForm';
import MobileMenu from './mobileMenu';

const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);
  const [size, setSize] = useState([0]);

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
    const width = useWindowSize();
    if (width <= 767) {
      return (
        <>
          {menuActive && <MobileMenuButtonClose />}
          {menuActive && <MobileMenu />}
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

  const useWindowSize = () => {
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  };

  return (
    <>
      <header className="o-header">
        <section className="o-header__account">
          <div className="container">
            <h3>
              Olá, <span>{props.userName}</span>
            </h3>
            <Link to="/minha-conta">Minha Conta</Link>
            <Link to="/" className="a-button--logout">
              Sair
            </Link>
          </div>
        </section>
        <section className="o-header__navigation">
          <div className="container">
            {<MobileOnly />}
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
        </section>
      </header>
    </>
  );
};

export default Header;
