import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
        <h1>Shopping App</h1>
        <div>
            <CartValue />
            <Location />
        </div>
        <h2>Shopping Cart</h2>
        <div>
            <ExpenseList />
        </div>
        <h2>Add Items</h2>
        <div>
            <ItemSelected />
        </div>
    </div>
  );
}

export default App;
