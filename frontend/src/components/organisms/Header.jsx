import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/image-tretislogo-loja.svg';
import Cart from '../molecules/Cart';
import SearchForm from '../molecules/SearchForm';

const Header = (props) => {
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
            <h1>
              <Link to="/">
                <img src={logo} alt="Loja Trétis" />
              </Link>
            </h1>
            <SearchForm />
            <Cart count="0" />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
