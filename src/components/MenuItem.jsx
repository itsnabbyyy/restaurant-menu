import React from "react";  

//define the MenuItem component
const MenuItem = ({ 
    name = "Menu Item",
    description = "Delicious dish",
    price = 0,
    category = "Main Course",
    isVegetarian = false,
    isSpicy = false,
    image = "https://via.placeholder.com/150",
    onOrder

}) => {
   
        //function to handle the order button click
        const handleOrderClick = () => {

            // Check if onOrder is a function before calling it
            if (onOrder && typeof onOrder === 'function') {
                onOrder({
                    name,
                    description,
                    price,
                    category,
                    isVegetarian,
                    isSpicy,
                    image
                }); 
            }
        };

        return (
            <div className="menu-item">
                <img src={image} alt={name} className="menu-item-image" onError={(e) => {
                    // Fallback if image fails to load
                    e.target.src = "https://via.placeholder.com/150";
                }} />
               
               
               <div className="menu-item-content">
                <div className="menu-item-header">
                    <h3 className="menu-item-name">{name}</h3>

                    <div className="menu-item-tags">
                        {isVegetarian && (<span className="tag vegetarian" title="Vegetarian">🌱</span>)}
                        {isSpicy && (<span className="tag spicy" title="Spicy">🌶️</span>)}
                    </div>
                </div>

                {description && (
                    <p className="menu-item-description">{description}</p>
                )}


                
                <div className="menu-item-footer">
                    <span className="menu-item-price">MYR{price.toFixed(2)}</span>
                    <button className="order-button" onClick={handleOrderClick}>
                        Order Now
                    </button>
                </div>
               </div>
            </div>
        );


};  

export default MenuItem;
