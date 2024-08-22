import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/recipes/${id}/`)
      .then(response => response.json())
      .then(data => setRecipe(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  // Helper function to safely parse JSON strings
  const parseJSON = (jsonString) => {
    try {
      // Replace single quotes with double quotes and handle trailing commas
      const sanitizedString = jsonString
        .replace(/'/g, '"')  // Convert single quotes to double quotes
        .replace(/,(\s*[}\]])/g, '$1'); // Remove trailing commas

      return JSON.parse(sanitizedString);
    } catch (error) {
      console.error('JSON Parsing Error:', error);
      return [];
    }
  };

  // Parse JSON strings for steps, nutrition, and ingredients
  const steps = parseJSON(recipe.steps);
  const nutrition = parseJSON(recipe.nutrition);
  const ingredients = parseJSON(recipe.ingredients);

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Cooking Time: {recipe.minutes} minutes
          </Card.Subtitle>
          <Card.Text>{recipe.description}</Card.Text>
          
          <Card.Title>Nutrition</Card.Title>
          <ListGroup className="mb-3">
            <ListGroup.Item>Calories: {nutrition[0] || 'N/A'}</ListGroup.Item>
            <ListGroup.Item>Fat: {nutrition[1] || 'N/A'}g</ListGroup.Item>
            <ListGroup.Item>Carbohydrates: {nutrition[2] || 'N/A'}g</ListGroup.Item>
            <ListGroup.Item>Protein: {nutrition[3] || 'N/A'}g</ListGroup.Item>
            <ListGroup.Item>Fiber: {nutrition[4] || 'N/A'}g</ListGroup.Item>
            <ListGroup.Item>Sodium: {nutrition[5] || 'N/A'}mg</ListGroup.Item>
            <ListGroup.Item>Sugar: {nutrition[6] || 'N/A'}g</ListGroup.Item>
          </ListGroup>

          <Card.Title>Ingredients</Card.Title>
          <ListGroup className="mb-3">
            {ingredients.length > 0 ? (
              ingredients.map((ingredient, index) => (
                <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>No ingredients listed.</ListGroup.Item>
            )}
          </ListGroup>

          <Card.Title>Steps</Card.Title>
          <ListGroup as="ol" className="list-group-numbered">
            {steps.length > 0 ? (
              steps.map((step, index) => (
                <ListGroup.Item as="li" key={index}>{step}</ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>No steps listed.</ListGroup.Item>
            )}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RecipeDetail;
