import {createContext, useContext} from "react";
import { LoginContext } from "../context";

const UserContext = createContext("Maruf");

function Component1() {

  return (
    <UserContext.Provider value={"Mohammad maruf"}>
        <Component5/>
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);
  return (
    <>
    
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
      <h3>{`Login ${useContext(LoginContext)}`}</h3>
    </>
  );
}

export default Component1