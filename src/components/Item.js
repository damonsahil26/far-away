export const Item = (props) => {
    return (
        <li>
            <input type='checkbox' value={props.item.packed} onChange={() => props.onTogglePackedItem(props.item.id)} />
            <span style={props.item.packed ? { textDecoration: 'line-through' } : {}}>
                {props.item.quantity} {props.item.description}
            </span>
            <button style={{ color: 'red', fontSize: '14px' }} onClick={() => props.onDeleteItem(props.item.id)}>❌</button>
        </li>);
}