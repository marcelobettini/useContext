import React, { useContext } from "react";
import UserContext from "../UserContext";

export const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="header line-pad">
      <h3>Header component</h3>
      <pre>Lvl 3: No need for user data</pre>
      <p>Email: {user.email}</p>
    </header>
  );
};
