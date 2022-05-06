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
          {items.map(({ id, type, amount, currency }) =>
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>)}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    })
    )
}


