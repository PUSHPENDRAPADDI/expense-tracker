import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, searchItems } = useContext(GlobalContext);

  return (
    <>
      {transactions.length > 0 &&
        <>
          <h3>History</h3>
          <input type="text" onChange={(e) => searchItems(e.target.value)} placeholder="Search here ...." />
        </>
      }
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
