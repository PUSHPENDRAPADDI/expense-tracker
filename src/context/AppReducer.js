import { constant } from "./Contants";
export default (state, action) => {
  switch (action.type) {
    case constant.DELETE_TRANSACTION:

      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
        transactionsCopy: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    case constant.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        transactionsCopy: [action.payload, ...state.transactions],

      }
    case constant.SEARCH_TRANSACTION:
      return {
        ...state,
        transactions: state.transactionsCopy.filter(obj =>
          obj.itemName.toLowerCase().includes((action.payload).toLowerCase()))
      }
    default:
      return state;
  }
}