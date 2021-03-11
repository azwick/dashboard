import InputForm from "./InputForm";

type ItemProps = {
    key?: string,
    id: string,
    content?: string | null,
    complete: boolean
}

type Props = {
    item: ItemProps,
    handleToggle: any,
    handleDeletion: any,
    updateItem: any,
}

const Item = ({item, handleToggle, handleDeletion, updateItem } : Props) : React.ReactElement => {
    return ( 
        <li key={item.id} id={item.id} className="item">
            {item.content ? <div onClick={handleToggle} className={item.complete ? 'done' : ''}>{item.content}</div> : <InputForm updateItem={updateItem} /> }
            <span onClick={handleDeletion} className="delete">✗</span>
        </li>
    );
}
 
export default Item;