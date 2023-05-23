import PropTypes from 'prop-types';
import css from './TransactionHistoryRow.module.css';

export const TransactionHistoryRow = ({ id, type, amount, currency }) => (
  <tr className={css.tr} key={id}>
    <td className={css.tType}>{type}</td>
    <td className={css.tAmount}>{amount}</td>
    <td className={css.tCurrency}>{currency}</td>
  </tr>
);

TransactionHistoryRow.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
