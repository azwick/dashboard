import './Checklist.css';

import Item from './Item';
import {useState} from 'react';

// const testData = [
//   { "id": "1", "content": "Give dog a bath", "complete": false }, 
//   { "id": "2", "content": "Do laundry", "complete": true }
// ];

const Checklist = ({title, maxCount}) => {
  const [toDos, setToDos] = useState([]);
  const [count, setCount] = useState(toDos.length);

  const handleToggle = (e) => {
      e.preventDefault()
      let mapped = toDos.map(item => {
        return (item.id === (e.currentTarget.parentNode.id) ? { ...item, complete: !item.complete } : { ...item});
      });
      setToDos(mapped);
  }

  const handleDeletion = (e) => {
      e.preventDefault()
      let filteredList = toDos.filter(item => {
        return (item.id !== e.currentTarget.parentNode.id);
      });
      setToDos(filteredList);
      setCount(count - 1);
  }

  const addItem = (e) => {
    const keyId = ((count + 1) + title.replace(/[^a-zA-Z0-9]/g,''));
    const copyItem = [...toDos, { id: keyId, content: null, complete: false }];
    setToDos(copyItem);
    setCount(count + 1);
  }

  const updateItem = (userContent, e) => {
    const newList = toDos.map((item) => {
      if (item.id === e.currentTarget.parentNode.id) {
        const keyId = (count + title + userContent).replace(/[^a-zA-Z0-9]/g,'');
        const updatedItem = {...item, id: keyId, content: userContent };
        return updatedItem;
      }
      return item;
    });
    setToDos(newList);
  }

  return (
    <div className="checklist">
      <h2 className="title">
        {title} <span className="counter">{count} von {maxCount}</span>
      </h2>
      {(count > 0) ?
        <ul className="list">
          {toDos.map((item) => {
            return (
                <Item key={item.id} item={item} handleToggle={handleToggle} handleDeletion={handleDeletion} updateItem={updateItem} />
              )
            })}
        </ul>
       : <div className="emptyState">Füge dein erstes ToDo hinzu...</div> }
      {count < maxCount &&
        <button onClick={addItem}>+</button>
      } 
    </div>
  );
}

export default Checklist;
