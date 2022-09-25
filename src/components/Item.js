import React, {useState} from "react";

function Item({ name, category }) {
  console.log(name);
  
  const [addToCart, setAddToCart] = useState(false)
  const [inCart, setInCart] = useState(false)

  const cartModes = addToCart ? 'Add to Cart' : 'Remove From Cart'
  const listClass = inCart ? "in-cart" : ""

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => {
        setAddToCart(!addToCart)
        setInCart(!inCart)
        }}>{cartModes}</button>
    </li>
  );
}

export default Item;
