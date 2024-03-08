import React, { useState } from 'react';
import './SearchRecipeByRegion.css';

// Image Card Component
const ImageCard = ({ imageSrc, title, description }) => (
  <div className="image-card">
    <img src={imageSrc} alt={title} className="card-image" />
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  </div>
);

const SearchRecipeByRegion = () => {
  const [buttons, setButtons] = useState(['Asia', 'Europe', 'North America']);
  const [searchTerm, setSearchTerm] = useState('');

  const handleButtonClick = (region) => {
    setButtons([...buttons, region]);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here using the searchTerm state
    console.log('Search clicked with term:', searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-recipe-container">
      <h2 className="subregion-heading">Wanna try something from a different place</h2>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by region..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
      </div>

      <div className="searchbar-container1">
        <ul className="searchbar-list1">
          {buttons.map((region, index) => (
            <li key={index} className="searchbar-item1">
              <div onClick={() => handleButtonClick(region)} className="region-button">
                {region}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Integrate Image Cards */}
      <div className="image-cards-container">
        <ImageCard
          imageSrc="https://placekitten.com/240/240"
          title="Cat Recipe"
          description="A delicious recipe for cat lovers."
        />
        <ImageCard
          imageSrc="https://placekitten.com/240/241"
          title="Another Recipe"
          description="Yet another tasty recipe for pet enthusiasts."
        />
        <ImageCard
          imageSrc="https://placekitten.com/240/242"
          title="Specialty Dish"
          description="A special dish that will make your pets happy."
        />
        <ImageCard
          imageSrc="https://placekitten.com/240/242"
          title="Specialty Dish"
          description="A special dish that will make your pets happy."
        />
        <ImageCard
          imageSrc="https://placekitten.com/240/240"
          title="Cat Recipe"
          description="A delicious recipe for cat lovers."
        />
        <ImageCard
          imageSrc="https://placekitten.com/240/241"
          title="Another Recipe"
          description="Yet another tasty recipe for pet enthusiasts."
        />
        <ImageCard
          imageSrc="https://placekitten.com/240/242"
          title="Specialty Dish"
          description="A special dish that will make your pets happy."
        />
        <ImageCard
          imageSrc="https://placekitten.com/240/242"
          title="Specialty Dish"
          description="A special dish that will make your pets happy."
        />
      </div>
    </div>
  );
};

export default SearchRecipeByRegion;
