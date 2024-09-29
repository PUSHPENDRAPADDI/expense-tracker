import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  function getFormattedDate() {
    const date = new Date();
    const day = date.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  
  const onSubmit = e => {
    let itemName = text === '' ? "UnNamed" : text;
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      itemName,
      amount: +amount,
      timeStamp: getFormattedDate()
    }
    setText('');
    setAmount(0);
    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn" disabled={amount === 0}>Add transaction</button>
      </form>
    </>
  )
}
