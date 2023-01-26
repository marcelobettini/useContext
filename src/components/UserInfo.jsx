import React, { useContext } from "react";
import UserContext from "../UserContext";

export const UserInfo = () => {
  const { user, setUser, reset } = useContext(UserContext);
  const changeName = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const newName = data.get("name").trim();
    if (!newName) return null;
    setUser({
      ...user,
      name: newName,
    });
    e.target.reset();
  };
  return (
    <aside className="user line-pad">
      <h4>UserInfo component</h4>
      <pre>Lvl 4: Here we need user data</pre>
      <div
        style={{
          fontWeight: "700",
          backgroundColor: "pink",
          padding: ".5em",
          margin: "1rem 0",
          display: "inline-block",
        }}
      >
        User data: {user.name} {user.lastName}
        <form onSubmit={changeName}>
          <label htmlFor="name">Rename</label>
          <input type="text" id="name" name="name" />
          <input type="submit" value="do it!" />
          <input type="button" value="reset" onClick={reset} />
        </form>
      </div>
    </aside>
  );
};
