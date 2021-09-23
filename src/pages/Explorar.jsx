import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import lokipresident from '../images/loki-president.jpg';
import '../App.css';

function Explorar() {
  Explorar.displayName = 'Explorar';
  return (
    <div className="explore-body">
      <Header title={ Explorar.displayName } />
      <div className="explore">
        <div className="explore-container ">
          <Link to="/explorar/comidas">
            <button className="explore-btn" type="button" data-testid="explore-food">
              Explorar Comidas
            </button>
          </Link>
          <Link to="/explorar/bebidas">
            <button className="explore-btn" type="button" data-testid="explore-drinks">
              Explorar Bebidas
            </button>
          </Link>
        </div>

        <img src={ lokipresident } alt="loki drink" />
      </div>
      <Footer />
    </div>
  );
}

export default Explorar;
