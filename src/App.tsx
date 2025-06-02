import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { useValidatedInput } from './hooks/useValidatedInput';

interface User {
  id: string;
  name: string;
  email: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data: User[] = await response.json();
        setUsers(data)
        setError(null)
      } catch (err: any) {
        setError(err.message || "Unknown Error ")
      } finally {
        setLoading(false)
      }
    }

    fetchUsers();

  }, [])

  return (
    <div className="App" style={{ marginTop: 500 }}>
      <div style={{ padding: 20 }}>
        <h2>Users List</h2>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name} - {user.email}</li>
            ))}
          </ul>
        )}

      </div>
    </div>
  );
}

export default App;
