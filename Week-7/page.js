import ItemList from  "./item-list";
import NewItem from './new-item';
import itemsData from './items.json';
"use client";
import React, { useState } from 'react';


const Page = () => {
    const [items, setItems] = useState(itemsData);

    // Event handler to add a new item
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </div>
    );
};


export default function page() {
    return(
        <main>
            <h1 className="font-bold text-3xl text-black">"Shopping List"</h1>
            <ItemList/>
        </main>
        
    )
}