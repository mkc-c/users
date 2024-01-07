import { useState } from "react";

function UserForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <form>
      <div>
        <label>Name</label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
