import PropTypes from 'prop-types';
import s from "./TransactionHistory.module.css"

export function TransactionHistory({items}) {
    return (
        <table className={s.transactionHistory}>
  <thead>
    <tr className={s.tableHead}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
          {items.map(({id,type,amount,currency}) =>
            <Transaction
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />)}    
  </tbody>
</table>
    )
}
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired
}

export function Transaction({ type, amount, currency }) {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
}
Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id:PropTypes.string
}  


