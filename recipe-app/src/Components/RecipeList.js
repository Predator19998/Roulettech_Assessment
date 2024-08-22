import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/recipes/')
      .then(response => response.json())
      .then(data => {
        setRecipes(data);
        setFilteredRecipes(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSearch = (query) => {
    fetch(`http://localhost:8000/api/recipes/?search=${query}`)
      .then(response => response.json())
      .then(data => setFilteredRecipes(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Recipe List</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredRecipes.map(recipe => (
          <li key={recipe.id}>
            <a href={`/recipes/${recipe.id}`}>{recipe.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
