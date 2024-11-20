import ItemList from './item-list';
import NewItem from './new-item'; 
import MealIdeas from './meal-ideas'; 
import itemsData from './items.json'; 
"use client";

import React, { useState } from 'react';

const Page = () => {
    const [items, setItems] = useState(itemsData); 
    const [selectedItemName, setSelectedItemName] = useState("");
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };


    const handleItemSelect = (name) => 
         cleanedName = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "").split(",")[0].trim();
        setSelectedItemName(cleanedName);
    };

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1 }}>
                <h1 className="font-bold text-3xl text-black">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} /> 
            </div>

            <div style={{ flex: 1 }}>
                {selectedItemName && <MealIdeas ingredient={selectedItemName} />} 
            </div>
        </div>
    );
};

export default Page;
