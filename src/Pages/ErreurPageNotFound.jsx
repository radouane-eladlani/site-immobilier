import React from 'react'
import { Link } from 'react-router-dom'
import "./ErreurPageNotFound.scss";
import Navbar from '../mis_en_page/Navbar';
import Main from '../mis_en_page/Main';

function ErreurPageNotFound() {
  return (
      <Main>
      <Navbar />
      <div>
      <div className="error_flex">
        <h1 className="error_title">404</h1>
        <p className="error_p">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="error_return" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
    </Main>
  );
}

export default ErreurPageNotFound