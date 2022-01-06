import Profile from './components/Profile';
import user from './components/user.json';
import Statistics from './components/Statistics.js';
import data from './components/data.json';
import friends from './components/friends.json';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import transactions from './components/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      ;
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
}
