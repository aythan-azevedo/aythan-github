import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchDrinksRandom } from '../services/Api';
import '../App.css';

function SearchDrinks() {
  SearchDrinks.displayName = 'Explorar Bebidas';
  const [drink, setDrink] = useState();
  useEffect(() => {
    fetchDrinksRandom().then((res) => setDrink(res));
  }, []);

  return (
    <div className="explore-drinks">
      <Header title={ SearchDrinks.displayName } />
      <div className="exploreDrinks">
        <Link to="/explorar/bebidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to={ `/bebidas/${drink}` }>
          <button
            type="button"
            data-testid="explore-surprise"
          >
            Me Surpreenda!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default SearchDrinks;
