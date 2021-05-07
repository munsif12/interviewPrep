import React, {
  useState,
  useEffect,
  useReducer,
  createContext,
  useRef,
} from "react";
import "./App.css";
import ContextGetter from "./ContextGetter";

const Child = ({ myName }) => {
  return <div>hello i am {myName}</div>;
};
const context = createContext();
function App() {
  const [type, settype] = useState("type");
  const userNameRef = useRef("");
  const userData = {
    name: "munsif",
    age: 12,
    uni: "NUML",
  };
  const reducer = (state, action) => {
    if (action.type === "clickCounter") {
      console.log(state++);
      return state++;
    }
    return state;
  };
  // let [counter, setcounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  useEffect(() => {
    alert("you clicked me aouchh" + state);
  }, [state]);
  return (
    <div className="App">
      {/* <button onClick={() => setcounter(++counter)}>{counter}</button> */}
      <button
        onClick={() => {
          dispatch({ type: "clickCounter" });
          settype(userNameRef.current.type);
        }}
        ref={userNameRef}
      >
        {state}
      </button>
      <Child myName={"Child"} />
      {/* trying useContex */}
      <context.Provider value={userData}>
        <ContextGetter />
      </context.Provider>
      {/* useReff hookk */}
      {type}
    </div>
  );
}
export default App;
export { context };
