import { useState } from "react";

export const Form = ({ onNewItem }) => {
    const [description, setDescription] = useState('');

    const [quantity, setQuantity] = useState(1);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!description) {
            return;
        }

        const newItem = {
            description: description,
            quantity: quantity,
            packed: false,
            id: Date.now()
        }
        onNewItem(newItem);
        setDescription('');
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleFormSubmit}>
            <h3>What do you need for you trip🎒?</h3>
            <select value={quantity} onChange={(e) => { setQuantity(Number(e.target.value)) }}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(
                    (num) =>
                        <option key={num} value={num}>{num}</option>
                )}
            </select>
            <input type="text" placeholder="Item..." value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <button type="Submit">Add</button>
        </form>
    );
}