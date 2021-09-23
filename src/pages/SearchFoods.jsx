import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchMealsRandom } from '../services/Api';
import '../App.css';

function SearchFoods() {
  SearchFoods.displayName = 'Explorar Comidas';
  const [food, setFood] = useState();
  useEffect(() => {
    fetchMealsRandom().then((res) => setFood(res));
  }, []);

  return (
    <div className="explore-foods">
      <Header title={ SearchFoods.displayName } />
      <div className="exploreFoods">
        <Link to="/explorar/comidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button
            type="button"
            data-testid="explore-by-area"
          >
            Por Local de Origem
          </button>
        </Link>
        <Link to={ `/comidas/${food}` }>
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

export default SearchFoods;
