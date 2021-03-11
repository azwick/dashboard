import { useState } from "react";

const InputForm = ({ updateItem } : { updateItem : any}) : React.ReactElement => {
    const [ inputValue, setInputValue ] = useState('');

    const handleChange = (e: any) => {
      setInputValue(e.currentTarget.value);
    }

    const handleSubmit = (e: any) => {
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