import React from 'react'

// Define the RestaurantHeader component
    const RestaurantHeader = ({
    restaurantName = "Our Restaurant",
    tagline = "Delicious food for everyone",
    rating = 0,
    cuisine = "International",
}) => {
    // function to render stars based on rating
    const renderStars = (rating) => {
        return Array.from({ length: rating }).map((_, i) => (
            <span key={i}>⭐</span>
        ));
    };

    return (
        <header className="restaurant-header">
            <h1>{restaurantName}</h1>
            <p className="tagline">{tagline}</p>
            <div className="rating">
                <span className="stars">{renderStars(rating)}</span>
                <span className="cuisine">({cuisine})</span>
            </div>
        </header>
    );
};  

export default RestaurantHeader;