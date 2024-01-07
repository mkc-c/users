import { useState } from "react";

import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onUsersAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onUsersAdd={onUsersAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
