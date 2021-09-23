import React, { useState } from 'react';
import CardsRecipesDones from '../components/CardsRecipesDone';
import Header from '../components/Header';
import '../App.css';

function ReceitasFeitas() {
  const recipesDone = JSON.parse(localStorage.getItem('doneRecipes'));
  const [newRecipes, setNewRecipes] = useState(recipesDone);

  ReceitasFeitas.displayName = 'Receitas Feitas';

  if (recipesDone === null) {
    const doneRecipes = [];
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    setNewRecipes(doneRecipes);
  }

  const btnAll = () => {
    setNewRecipes(recipesDone);
  };

  const btnFood = () => {
    setNewRecipes(recipesDone.filter((recipe) => recipe.type === 'comida'));
  };

  const btnDrinks = () => {
    setNewRecipes(recipesDone.filter((recipe) => recipe.type === 'bebida'));
  };

  return (
    <div className="recipes-done">
      <Header title={ ReceitasFeitas.displayName } />
      <section className="recipesDone">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ btnAll }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ btnFood }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ btnDrinks }
        >
          Drinks
        </button>
        <CardsRecipesDones recipesFilter={ newRecipes } />
      </section>
    </div>
  );
}

export default ReceitasFeitas;
