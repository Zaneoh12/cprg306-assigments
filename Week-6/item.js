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
export default Item;
