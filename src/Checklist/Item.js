import InputForm from "./InputForm";

const Item = ({item, handleToggle, handleDeletion, updateItem }) => {
    return ( 
        <li key={item.id} id={item.id} className="item">
            {item.content ? <div onClick={handleToggle} className={item.complete ? 'done' : ''}>{item.content}</div> : <InputForm updateItem={updateItem} /> }
            <span onClick={handleDeletion} className="delete">✗</span>
        </li>
    );
}
 
export default Item;