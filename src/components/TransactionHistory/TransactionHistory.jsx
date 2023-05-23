import PropTypes from 'prop-types';
import { TransactionHistoryRow } from '../TransactionHistoryRow/TransactionHistoryRow';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead className={css.tHead}>
      <tr>
        <th className={css.tType}>Type</th>
        <th className={css.tAmount}>Amount</th>
        <th className={css.tCurrency}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionHistoryRow
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
