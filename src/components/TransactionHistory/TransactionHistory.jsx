import s from '../TransactionHistory/TransactionHistory.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.type}>{'Type'}</th>
          <th className={s.amount}>{'Amount'}</th>
          <th className={s.currency}>{'Currency'}</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.exact({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  ),
};
