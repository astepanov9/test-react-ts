import React from 'react';
import './App.css';
import Card from './Card';

export interface Users {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [users, setUsers] = React.useState<Users[]>([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => setUsers([...json]));
  }, []);

  return (
    <div className="App">
      <div>
        {users.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default App;
