import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  
  function handleFormSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: name,
      category: category
    };
    onItemFormSubmit(newItem);
    setName("");
    setCategory("produce");
    console.log(newItem)
  }
  
  
  function handleFormChange(event){
    setName(event.target.value);
  }
  function handleChange(event){
    setCategory(event.target.value);
  }
  

  return (
    <form onSubmit={handleFormSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormChange} value={name} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
