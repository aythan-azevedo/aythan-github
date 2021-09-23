import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import FetchContext from '../context/FetchContext';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { categoryListDrink, fetchDrinksList } from '../services/Api';
import Category from '../components/Category';
import '../App.css';
import Loading from '../components/Loading';

function Drinks() {
  const {
    setTypeFunc, data, setData, setNameRecipes, setImgRecipes, setCategories,
    setIdRecip,
  } = useContext(FetchContext);

  Drinks.displayName = 'Bebidas';

  useEffect(() => {
    const renderCategorys = () => {
      categoryListDrink().then((res) => setCategories(res));
      fetchDrinksList().then((res) => setData(res));
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

  if (data.length === 1) {
    return <Redirect to={ `/bebidas/${data[0].idDrink}` } />;
  }

  const renderDrinks = () => {
    setNameRecipes('strDrink');
    setImgRecipes('strDrinkThumb');
    setIdRecip('idDrink');
  };

  return (
    <div className="body-drink">
      { setTypeFunc('bebidas') }
      <Header title={ Drinks.displayName } />
      <Category />
      { data.length === 0 ? <Loading /> : renderDrinks() }
      <Cards />
      <Footer />
    </div>
  );
}

export default Drinks;
