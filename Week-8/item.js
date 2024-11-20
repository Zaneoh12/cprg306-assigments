import React from "react";
const Item = ({name, quantity, category}) => {
    return(
        <li>
            Name: {name}
            Qauntity: {quantity}
            Category: {category}
        </li>
    );
};
const ItemList = ({ items }) => {
};
const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
export default Item;