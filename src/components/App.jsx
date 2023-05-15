import { Profile } from './profile/Profile';
import user from '../data/user';
import { Statistics } from './statistics/Statistics';
import data from '../data/data';
import { FriendList } from './friend-list/FriendList';
import friends from '../data/friends';
import { TransactionHistory } from './transaction-history/TransactionHistory';
import transactions from '../data/transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
