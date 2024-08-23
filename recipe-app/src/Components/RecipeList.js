import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
    <Container>
      <h1 className="text-center my-4">Recipe List</h1>
      
      {/* Search Bar */}
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <SearchBar onSearch={handleSearch} />
        </Col>
      </Row>
      
      {/* Recipe Cards */}
      <Row>
        {filteredRecipes.map(recipe => (
          <Col md={4} key={recipe.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Link href={`/recipes/${recipe.id}`}>View Recipe</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeList;