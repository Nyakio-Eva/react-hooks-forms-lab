import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import {v4 as uuid} from "uuid";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  
  function handleAddItem(newItemData){
    const newItem= {...newItemData, id: uuid()};
    
    setItems([...items, newItem])
  }
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onAddNewItem={ handleAddItem}/>
    </div>
  );
}

export default App;
