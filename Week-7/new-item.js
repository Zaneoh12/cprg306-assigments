import { useState } from 'react';

const NewItem = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
   const handleSubmit = (e) => {        e.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert(`Item Added: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setQuantity(1); // Resetting to initial state
        setCategory("Produce");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block">Item Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <label htmlFor="quantity" className="block">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <label htmlFor="category" className="block">Category:</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 w-full"
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2">Add Item</button>
        </form>
    );
};
const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
        id: Math.random().toString(36).substring(2, 15),
        name: itemName,
        quantity: itemQuantity,
        category: itemCategory,
    };
    onAddItem(newItem);
    // Reset form or handle additional logic...
};
export default NewItem;
