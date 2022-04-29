import React from "react";
import { useState } from "react";
export default function Counter() {
  const [count, setcount] = useState(0);

  const addCount = () => {
    setcount(count + 1);
  };
  const delCount = () => {
      if(count>0){
    setcount(count - 1);
      }else{
          setcount(0)
      }
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={addCount}>+</button>
      <button onClick={delCount}>-</button>
    </div>
  );
}
