import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items,onAddNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem, setSearchedItem] = useState("")
  const[newItem, setNewItem] = useState({})
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function handleSearchedItem(event){
    setSearchedItem(event.target.value);
  }
  
  function handleAddItem(newItemData) {
    const newItem = { ...newItemData, id: uuid() };
    setNewItem(newItem);
    onAddNewItem(newItem);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem} newItem= {newItem}/>
      <Filter onSearchChange={handleSearchedItem}  onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => {
          console.log(item.id)
           return(
          <Item key={item.id} name={item.name} category={item.category} searchedItem={searchedItem}/>
        )})}

      </ul>
    </div>
  );
}

export default ShoppingList;
