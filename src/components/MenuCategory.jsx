import React from "react";
import MenuItem from './MenuItem';

const MenuCategory = ({ categoryName ="Category", items = [], onOrder }) => {
    const hasValidItems = () => {
        return Array.isArray(items) && items.length > 0;
    };

    return (
        <div className="menu-category">
            <h2 className="category-name">{categoryName}</h2>
            {hasValidItems() ? (
                <div className="menu-items">
                    {items.map((item, index) => (
                        <MenuItem
                            key={item.id || index}
                            {...item}
                            onOrder={onOrder}
                        />
                    ))}
                </div>
            ) : (
                <p className="no-items">No items available in this category.</p>
            )}
        </div>
    );
};      

export default MenuCategory;
        