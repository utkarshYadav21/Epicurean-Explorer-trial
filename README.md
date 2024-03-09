# Epicurean Explorer

Welcome to Epicurean Explorer, your ultimate recipe explorer web app! Discover and explore a world of delicious recipes from various regions, enhanced with cutting-edge AI technology for a delightful cooking experience.

## Table of Contents
1. [Introduction](#1-introduction)
2. [Getting Started](#2-getting-started)
3. [Architecture](#3-architecture)
4. [Usage](#4-usage)
5. [API Documentation](#5-api-documentation)
6. [Custom Features](#6-custom-features)
7. [Troubleshooting](#7-troubleshooting)
8. [Contributors](#8-contributors)
   
## 1. Introduction

Welcome to Epicurean Explorer, your go-to recipe explorer! This web app empowers users to search for recipes by name, providing nutritional values, instructions, and required ingredients. Users can also log in to save their favorite recipes and maintain recipe-specific ingredient shopping lists. Leveraging our custom backend built with Node.js, Express, and MongoDB, we've integrated the Recipe API from Cosy Labs IIITD, allowing users to explore recipes from various regions globally.

## 2. Getting Started
- Install all the npm packages. 
- Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

- In order to run the application Type the following command

```bash
npm start
```
  or
```bash
npm run dev
```

- The Application Runs on **localhost:5173**


## 3. Architecture

Epicurean Explorer follows a MERN (MongoDB, Express.js, React.js, Node.js) stack architecture and incorporates the use of Gen-AI by Gemini for enhancing user interactions with recipe instructions.

### Components
   - User interface for recipe search, display, and interaction.
   - Integration with Gen-AI by Gemini for fetching human-readable instructions and diverse AI-generated responses.
   - User authentication for saving favorites and maintaining shopping lists.
1. **Frontend (React.js):**
   - User interface for recipe search, display, and interaction.
   - Integration with Gen-AI by Gemini for fetching human-readable instructions and diverse AI-generated responses.
   - User authentication for saving favorites and maintaining shopping lists.

2. **Backend (Node.js and Express.js):**
   - Custom endpoints for handling user requests.
   - Integration with MongoDB for data storage.
   - Interaction with Recipe API from Cosy Labs IIITD.
   - Utilization of Gen-AI by Gemini for advanced processing of recipe instructions.

3. **Database (MongoDB):**
   - Stores user data, favorite recipes, and shopping lists.
   - Efficient retrieval of recipe details.

4. **Deep Learning Models:**
   - Food classification model for image-based recipe identification.

5. **External APIs:**
   - Recipe API from Cosy Labs IIITD for global recipe data.

6. **Gen-AI by Gemini:**
   - Integration for fetching human-readable instructions and enhancing user experience.
   - Advanced processing of recipe-related text to provide more insightful and varied responses.

The use of Gen-AI by Gemini enriches Epicurean Explorer by providing users with not only clear instructions but also diverse and engaging responses, enhancing the overall user experience. This integration is seamlessly woven into the backend architecture, ensuring a cohesive and intelligent interaction layer for recipe instructions.


## 4. Usage

Epicurean Explorer offers a diverse range of features to make your recipe exploration seamless and enjoyable.

1. **Recipe Search:**
   - Users can search for recipes by name.
   - Results include nutritional values, instructions, and required ingredients.
2. **Image-Based Recipe Identification (MVP):**
   - Experience cutting-edge technology with our deep learning food classification model.
   - Identify recipes by simply uploading an image, providing instant details on nutritional values, instructions, and ingredients.

3. **User Authentication:**
   - Users can create accounts, log in, and save their favorite recipes.
   - Shopping lists are maintained on a per-recipe basis.

4. **Global Recipe Exploration:**
   - Explore recipes from various regions and subregions across the globe.

5. **Gen-AI Integration:**
   - Fetch human-readable instructions and diverse AI-generated responses for recipes.
   - Enhance the user experience with intelligent and engaging interactions.

6. **Search Similar Recipes by Process:**
   - Utilize our custom logic that combines two API endpoints to find recipes with similar processes.
   - Discover recipes that share common cooking methods, such as boiling or stirring, providing a variety of options for your culinary preferences.
     

## 5. API Documentation
For API Documentation, please refer to
[API Documentation](https://documenter.getpostman.com/view/30406371/2sA2xh2YAB) 

## 6. Custom Features

**AI-Enhanced Recipe Retrieval:**
   - Combined endpoints to get similar recipes by process using our backend, Recipe API, and custom logic.
   - Identify recipes with similar processes for a more diverse and personalized recipe exploration.

## 7. Troubleshooting

- **Issue:** Unable to retrieve recipe details.
  - **Solution:** Ensure a stable internet connection and verify the Recipe API key.
- **Issue:** Error while saving favorite recipes.
  - **Solution:** Check your internet connection and ensure you are logged in.

- **Issue:** Gen-AI responses not displaying.
  - **Solution:** Confirm the integration with Gen-AI is properly configured, and the service is accessible.

- **Issue:** Image-based recipe identification not working.
  - **Solution:** Ensure the uploaded image is clear and representative of the food item. Check your internet connection and try again.

- **Issue:** Similar recipes by process not showing relevant results.
  - **Solution:** Verify your internet connection and ensure that the custom logic for combining API endpoints is functioning correctly. Adjust search parameters if necessary.

## 8. Contributors
- [Moksh Jain](https://github.com/Moksh05)
- [Tushar](https://github.com/tusharsharma5347)
- [Utkarsh Yadav](https://github.com/utkarshYadav21)
- [Vibhav Sharma](https://github.com/Vibhav70)
