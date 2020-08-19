import React from 'react';
import { Link } from 'react-router-dom';

const Modal = () => {
  return (
    <>
      <section className="o-modal">
        <aside className="o-modal__menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Canecas</Link>
            </li>
            <li>
              <Link to="/">Camisetas</Link>
            </li>
            <li>
              <Link to="/">Termo de Uso</Link>
            </li>
            <li>
              <Link to="/">Contato</Link>
            </li>
            <li>
              <Link to="/">Voltar ao Portal</Link>
            </li>
          </ul>
        </aside>
      </section>
    </>
  );
};

export default Modal;
