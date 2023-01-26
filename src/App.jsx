import { useState } from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import UserContext from "./UserContext";

const initValue = {
  name: "Marcelo Eduardo",
  lastName: "Bettini Michiels",
  email: "marcelobettini@yahoo.com.ar",
};
function App() {
  const [user, setUser] = useState(initValue);
  function reset() {
    setUser((prev) => (prev = initValue));
  }
  return (
    <>
      <p style={{ padding: ".6rem", fontSize: "18px" }}>
        Los datos del usuario viven en App. Los necesitamos en el componente
        UserInfo, que se renderiza en un nivel interior.
        <br />
        <b>
          <code>App/Layout/Container/OtherStuff/UserInfo</code>
        </b>
        <br />
        Con useContext no necesitamos pasar props para que los componentes
        accedan a los datos
      </p>
      <UserContext.Provider value={{ user, setUser, reset }}>
        <Layout />
      </UserContext.Provider>
    </>
  );
}

export default App;
