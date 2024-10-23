import React, {usState} from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
    const [sortBy, setSortBy] = useState("name");
    const sortedItems = [...items].sort((a, b) =>{
        if (sortBy === 'name') {
            return a.name.localecompare(b.name);

        } 
        else if (sortBy === "category"){
            return a.catergory.localecompare(b.catergory);
        }
        return 0;

        
    });
    return(
        <div>
            <div>
                <button onClick = {() => setSortBy("name")} style ={{backgroundColor: sortBy === "name" ? '#d1e7dd' : '#f8d7da'}}>
                    Sort by name
                </button>
                <button onClick={() => setSortBy("category")} style={{ backgroundColor: sortBy === "category" ? '#d1e7dd' : '#f8d7da' }}>
                    Sort by Category
                </button>
            </div>
            <ul>
                {sortedItems.map(item =>(
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
                ))}
            </ul>
        </div>
    );
};
export default ItemlList;