import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Navbar } from './components/Navbar';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';

function App() {
  const [items, setNewItems] = useState([]);
  const handleNewItems = (item) => {
    setNewItems((items) => [...items, item]);
  }

  const handleDeleteItem = (id) => {
    setNewItems((items) => items.filter(x => x.id !== id));
  }

  const handlePackedStatus = (id) => {
    setNewItems((items) =>
      items.map(item => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  }

  const handleClearList = () => {
    const confirmed = window.confirm('Are you sure ! You want to delete all items from the list ??');
    confirmed && setNewItems([]);
  }

  return (
    <div className="App">
      <Navbar />
      <Form onNewItem={handleNewItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onTogglePackedItem={handlePackedStatus} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}

export default App;
