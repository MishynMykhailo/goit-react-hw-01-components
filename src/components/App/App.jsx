import Profile from '../Profile';
import user from 'data/user';
import Statistics from '../Statistics';
import data from 'data/data';
import FriendList from '../FriendList';
import friends from 'data/friends';
import TransactionHistory from '../TransactionHistory';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};
