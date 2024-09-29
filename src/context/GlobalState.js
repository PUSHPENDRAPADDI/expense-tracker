import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { constant } from './Contants';

// Initial state
const initialState = {
  transactions: [],
  transactionsCopy :[]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: constant.DELETE_TRANSACTION,
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: constant.ADD_TRANSACTION,
      payload: transaction
    });
  }

  function searchItems(searchText) {
    dispatch({
      type: constant.SEARCH_TRANSACTION ,
      payload: searchText
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    transactionsCopy:state.transactionsCopy,
    deleteTransaction,
    addTransaction,
    searchItems
  }}>
    {children}
  </GlobalContext.Provider>);
}