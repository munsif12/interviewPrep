import React, { useContext } from "react";
import { context } from "./App";
function ContextGetter() {
  const contextApi = useContext(context);
  console.log(context);
  return <div>{contextApi.name}</div>;
}

export default ContextGetter;
