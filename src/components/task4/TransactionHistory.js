import PropTypes from 'prop-types';
import css from '../task4/Transactions.module.css'
export default function TransactionHistory({ items })
{
    return (
      <table className={css.transactionHistory}>
  <thead>
    <tr className={css.zebra}>
      <th className={css.type}>Type</th>
      <th className={css.amount}>Amount</th>
      <th className={css.currency}>Currency</th>
    </tr>
            </thead>
            <tbody>
            {items.map((item) => {
                return (<tr key={item.id}>
                        <td className={css.typeTd}>{item.type }</td>
                        <td className={css.amountTd}>{item.amount }</td>
                        <td className={css.currencyTd}>{item.currency }</td>
                    </tr>
                    )
            })}
            </tbody>
</table>
    )
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
  }),),
}
