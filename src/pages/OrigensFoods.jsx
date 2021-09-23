import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import DropDownArea from '../components/DropDownArea';
import Footer from '../components/Footer';
import HeaderSearch from '../components/Header';
import FetchContext from '../context/FetchContext';
import { fetchRecipesList } from '../services/Api';
import '../App.css';

function OrigensFoods() {
  OrigensFoods.displayName = 'Explorar Origem';
  const { data, setData } = useContext(FetchContext);
  const TWELVE = 12;

  const areaCards = () => (
    <div className="origens-foods">
      { data && data.slice(0, TWELVE).map((food, index) => (
        <Link
          to={ `/comidas/${food.idMeal}` }
          key={ food.idMeal }
        >
          <div
            className="origensFoods"
            data-testid={ `${index}-recipe-card` }
            key={ food.idMeal }
          >
            <p data-testid={ `${index}-card-name` }>{food.strMeal}</p>
            <img
              width="120px;"
              data-testid={ `${index}-card-img` }
              src={ food.strMealThumb }
              alt={ food.strMeal }
            />
          </div>
        </Link>
      ))}
    </div>);

  const renderRecipes = () => {
    fetchRecipesList().then((res) => setData(res));
  };
  useEffect(renderRecipes, [setData]);

  return (
    <div>
      <HeaderSearch title={ OrigensFoods.displayName } />
      <DropDownArea data={ data } />
      { !data ? <Loading /> : areaCards()}
      <Footer />
    </div>
  );
}

export default OrigensFoods;
