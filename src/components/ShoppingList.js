import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items);
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleChange(event){
    setSelectedCategory(event.target.value)
    
  }
  console.log(selectedCategory);
 
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          selectedCategory === "All" || item.category === selectedCategory ? (<Item key={item.id} name={item.name} category={item.category} />):null
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
