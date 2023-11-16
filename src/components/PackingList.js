import { useState } from "react";
import { Item } from "./Item";

export const PackingList = ({ items, onDeleteItem, onTogglePackedItem, onClearList }) => {
    const [sortBy, setSortBy] = useState('input');
    let sortedArray;
    const handleSort = (e) => {
        setSortBy(e.target.value);
    }

    switch (sortBy) {
        case 'input':
            sortedArray = items;
            break;
        case 'description':
            sortedArray = items.slice().sort((a, b) => a.description.localeCompare(b.description));
            break;
        case 'packed':
            sortedArray = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
            break;
        default:
            sortedArray = items;
    }

    return (
        <div className="list">
            <ul>
                {
                    sortedArray.map((item) => (
                        <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onTogglePackedItem={onTogglePackedItem} />
                    ))
                }
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={handleSort}>
                    <option value='input'>Sort by input order</option>
                    <option value='description'>Sort by description</option>
                    <option value='packed'>Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear List</button>
            </div>
        </div>
    );
}