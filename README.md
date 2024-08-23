# Recipe App

This is a simple recipe app built using React.js for the frontend and Django for the backend. The app allows users to browse and search for recipes, with the frontend consuming API endpoints provided by the backend.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Project Overview

The Recipe App is a 3-tier architecture project that includes:

- **Frontend**: A React.js web application for displaying and searching recipes.
- **Backend**: A Django REST API that serves recipe data to the frontend.
- **Database**: SQLite database for storing recipe data.

## Features

- View a list of recipes.
- Search for recipes by name or other keywords.
- View detailed information about each recipe, including ingredients, nutrition facts, steps, and description.

## Installation

### Prerequisites

- Node.js and npm
- Python 3 and pip

### Clone the Repository

```bash
git clone https://github.com/Predator19998/Roulettech_Assessment.git
cd Roulettech_Assessment
```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd recipe-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd recipe_project
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Create and apply migrations:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Run the Django development server:

   ```bash
   python manage.py runserver
   ```
6. Add the data:

   ```bash
   unzip output_recipes.json.zip
   python post_to_django.py
   ```

## Running the Project

- Ensure both the frontend and backend servers are running.
- Access the app by navigating to `http://localhost:3000` in your browser.

## API Endpoints

- **GET /api/recipes/**: List all recipes.
- **GET /api/recipes/{id}/**: Retrieve a specific recipe by ID.
- **GET /api/recipes/?search={query}**: Search for recipes based on a query.

## Usage

- Use the search bar to find recipes by name or keywords.
- Click on a recipe to view detailed information.

## Technologies Used

- **Frontend**: React.js, Bootstrap
- **Backend**: Django, Django REST Framework
- **Database**: SQLite
