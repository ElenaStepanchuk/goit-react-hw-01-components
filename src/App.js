import Profile from './components/task1/Profile';
import user from './components/task1/user.json';
import Statistics from './components/task2/Statistics.js';
import data from './components/task2/data.json'
import friends from './components/task3/friends.json'
import FriendList from './components/task3/FriendList';
import TransactionHistory from './components/task4/TransactionHistory';
import transactions from './components/task4/transactions.json'

export default function App() {
  return (<>
    <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />;
    <Statistics title="Upload stats" stats={data} />;
    <FriendList friends={friends} />;
    <TransactionHistory items={transactions} />;
    </>
  );
}