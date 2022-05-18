import s from '../TransactionHistory/TransactionHistory.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.type}>{'Type'.toUpperCase()}</th>
          <th className={s.amount}>{'Amount'.toUpperCase()}</th>
          <th className={s.currency}>{'Currency'.toUpperCase()}</th>
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

// Тут хз как сделать

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
