import { useState } from "react";

const InputForm = ({ updateItem }) => {
    const [ inputValue, setInputValue ] = useState('');

    const handleChange = (e) => {
      setInputValue(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      return updateItem(inputValue, e);
    }

    return (
      <form onSubmit={handleSubmit}>
          <input value={inputValue} type="text" onChange={handleChange} placeholder="Benenne dein ToDo..." required/>
      </form>
    )
  }
 
export default InputForm;