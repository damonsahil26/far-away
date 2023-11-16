export const Stats = ({ items }) => {

    if (items.length === 0) {
        return (
            <footer className="stats">
                <em>Start adding items for your trip... </em>
            </footer>
        );
    }
    const totalItems = items.length;
    const packedItems = items.filter(item => item.packed).length;
    const percentagePacked = Math.round((packedItems / totalItems) * 100);


    return (
        <footer className="stats">
            {percentagePacked !== 100 ?
                <em>
                    You have {totalItems} number of items for you trip👜, and you have already packed {packedItems} ({percentagePacked}%)
                </em>
                :
                <em>You are ready to go 🛫</em>
            }
        </footer>
    );
}