import { useState } from "react";

import "./App.css";
import ReduceQ from "./reduceQ";

function App() {
  const data = [
    { id: 1, name: "sunil", rollno: 32 },
    { id: 2, name: "sumit", rollno: 31 },
    { id: 3, name: "roshan", rollno: 31 },
    { id: 4, name: "amit", rollno: 23 },
    { id: 5, name: "ankit", rollno: 56 },
    { id: 6, name: "mohit", rollno: 22 },
  ];

  const [count, setCount] = useState(data);
  const handleDelete = (id) => {
    const d = count.filter((p) => p.id !== id);
    setCount(d);
  };
  const arr = [1, 1, 2, 3, 1, 4];
  const c = {};
  for (let e of arr) {
    if (c[e]) {
      c[e] += 1;
    } else {
      c[e] = 1;
    }
    console.log(c);
  }
  console.log(c);
  return (
    <div className="App">
      {count.map((p) => (
        <div>
          id:{p.id} name:{p.name} rollno:{p.rollno}
          <button
            onClick={() => {
              handleDelete(p.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
      <ReduceQ />
    </div>
  );
}

export default App;
