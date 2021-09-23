import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../App.css';

function Perfil() {
  Perfil.displayName = 'Perfil';
  const [userEmail, setState] = useState();

  const handleClick = () => {
    // localStorage.setItem('mealsToken', JSON.stringify(null));
    // localStorage.setItem('cocktailsToken', JSON.stringify(null));
    // localStorage.setItem('user', JSON.stringify(null));
    // localStorage.setItem('doneRecipes', JSON.stringify(null));
    // localStorage.setItem('favoriteRecipes', JSON.stringify(null));
    // localStorage.setItem('inProgressRecipes', JSON.stringify(null));
    localStorage.clear();
  };

  useEffect(() => {
    const getEmail = () => {
      const email = JSON.parse(localStorage.getItem('user'));
      if (email !== null) {
        setState(email.email);
      }
    };
    getEmail();
  },
  []);

  return (
    <div className="perfil-body">
      <Header title={ Perfil.displayName } />
      <div className="perfil">
        <div className="perfil-container">
          <p data-testid="profile-email">{userEmail}</p>
          <Link
            to="/receitas-favoritas"
            data-testid="profile-favorite-btn"
          >
            Receitas Favoritas
          </Link>
          <br />
          <Link
            to="/receitas-feitas"
            data-testid="profile-done-btn"
          >
            Receitas Feitas
          </Link>
          <br />
          <Link
            to="/"
            data-testid="profile-logout-btn"
            onClick={ handleClick }
          >
            Sair
          </Link>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Perfil;
