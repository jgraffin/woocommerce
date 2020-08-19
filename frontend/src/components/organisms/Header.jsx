import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/image-tretislogo-loja.svg';
import Cart from '../molecules/cart';
import SearchForm from '../molecules/searchForm';
import Modal from './modal';

const Header = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const ModalButton = ({ className = '', click, ...modifier }) => {
    const clickClassName = click ? `a-button--modal-${click}` : '';
    const propsButton = {
      className: `a-button ${className} ${clickClassName}`,
      ...modifier,
    };
    return <button {...propsButton} />;
  };

  return (
    <>
      <ModalButton click="close" onClick={() => setModalOpen(false)}>
        Fechar Menu
      </ModalButton>
      {modalOpen && <Modal />}

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
            <ModalButton click="open" onClick={() => setModalOpen(true)}>
              Abrir Menu
            </ModalButton>
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
