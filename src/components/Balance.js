import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '₹ ' + (p[0].split('')[0] === '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const [isExpenseOver, setIsExpenceOver] = useState(false);
  const [inputValue, setInputValue] = useState(10000);
  // let expenseReminder = 1000;
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsExpenceOver(false);
  };

  useEffect(() => {
    if (total > inputValue) {
      setIsExpenceOver(true)
    }
  }, [total])
  return (
    <>
      {isExpenseOver && <div className={`modal modal-warning`}>
        <div className="modal-content">
          <p>You are spending more than {inputValue}. If You want to update your. Please enter below</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter some input"
              required
            />
            <button type="submit">Submit</button>
          </form>
          <button onClick={()=> setIsExpenceOver(false)} className="close-btn">✖</button>
        </div>
      </div>}
      <h4>Your Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </>
  )
}
