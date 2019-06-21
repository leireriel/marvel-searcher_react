import React from 'react';
import { Link } from 'react-router-dom';
import './NavDetail.scss';

const NavDetail = ({ id, title }) => {
  return(
    <div className="nav__detail--wrapper">
      <h1 className="nav__detail--title">{title}</h1>
      <nav>
        <ol className="nav__detail--navigation">
          <li className="nav__detail--item">Estás viendo al personaje número {id}</li>
          <li className="nav__detail--item">
            <Link className="nav__detail--back" to="/">
              Volver
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default NavDetail;