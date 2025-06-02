import { UserProvider, useUser } from "./UserContext";

function UserProfile() {
  const { user, login, logout } = useUser();

  return (
    <div>

      {user ? (
        <>
          <h2>Welcome {user.name}</h2>
          <p>{user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>No User Logged In</h2>
          <button onClick={() => login({ name: "Swetha Sukuamar", email: "swethasukumar14@gmail.com" })}>Login</button>
        </>
      )}
    </div>
  )

}



function App() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  )
}

export default App;