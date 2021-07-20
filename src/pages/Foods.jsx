import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import FetchContext from '../context/FetchContext';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { categoryListMeal, fetchRecipesList } from '../services/Api';
import Category from '../components/Category';
import '../App.css';
import Loading from '../components/Loading';

function Foods() {
  const {
    setTypeFunc, data, setData, setNameRecipes, setImgRecipes, setCategories, setIdRecip,
  } = useContext(FetchContext);

  Foods.displayName = 'Comidas';

  useEffect(() => {
    const renderCategorys = () => {
      categoryListMeal().then((res) => setCategories(res));
      fetchRecipesList().then((res) => setData(res));
    };

    renderCategorys();
  }, [setCategories, setData]);

  const fnAlert = (func, message) => {
    func(message);
  };

  if (data === null) {
    const msg = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
    return fnAlert(alert, msg);
  }

  if (data.length === 1 && data[0].idMeal !== '52968') {
    return <Redirect to={ `/comidas/${data[0].idMeal}` } />;
  }

  const renderRecipes = () => {
    setNameRecipes('strMeal');
    setImgRecipes('strMealThumb');
    setIdRecip('idMeal');
  };

  return (
    <div className="body-food">
      { setTypeFunc('comidas')}
      <Header title={ Foods.displayName } />
      <Category />
      { data.length === 0 ? <Loading /> : renderRecipes() }
      <Cards />
      <Footer />
    </div>
  );
}

export default Foods;
