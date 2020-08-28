import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = (props) => {
  return (
    <>
      <nav className={`m-main-menu ${props.class}`}>
        <ul>
          <li className="is-active">
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
      </nav>
    </>
  );
};

export default MainMenu;
