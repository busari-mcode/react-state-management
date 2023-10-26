
// ############################## useState #########################################
//  ************** Learning phase 6 ********
// useState may contains a function as a starting point

import { useState } from 'react'

function NameList() {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState(() => "Jack");

  const onAddName = () => {
    setList([...list, name]);
  }
  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);

  function addOne () {
    setCount(count + 1);
  }
  return (
    <div className='App'>
    <button onClick={addOne}>Count = {count}</button>
  </div>
  );
}

function App() {
    return(
        <div>
          <Counter />
          <NameList />
        </div>
    );
}
  
export default App

//  ************** Learning phase 5 ********
// practice phase
// import { useState } from "react";

// function Counter () {
//   const [count, setCount] = useState(10)
  
//   function addOne () {
//     setCount(count + 1)
//   }
//   return(
//     <div className="App">
//       <button onClick={addOne}>count = {count}</button>
//     </div>
//   )
// }

// function NameList () {
//   const [list, setList] = useState(["Ade", "Ayo", "Adigun", "Abbey"])
//   const [name, setName] = useState("")
  
//   function addName () {
//     setList([...list, name])
//   }
//   return(
//     <div className="App">
//       <ul>
//         {list.map((name) => 
//         <li key={name}>{name}</li>
//         )}
//       </ul>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={addName}>Add name</button>
//     </div>
//   )
// }

// function App () {
//   return(
//     <div>
//     <Counter />
//     <NameList />
//     </div>
//   )
// }

// export default App

//  ************** Learning phase 4 ********
// to add an item to array
// import { useState } from 'react'

// function NameList() {
//   const [list, setList] = useState(["Jack", "Jill", "John"]);
//   const [name, setName] = useState("");

//   const onAddName = () => {
//     setList([...list, name]);
//   }
//   return (
//     <div>
//       <ul>
//         {list.map((name) => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={onAddName}>Add Name</button>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(10);

//   function addOne () {
//     setCount(count + 1);
//   }
//   return (
//     <div className='App'>
//     <button onClick={addOne}>Count = {count}</button>
//   </div>
//   );
// }

// function App() {
//     return(
//         <div>
//           <Counter />
//           <NameList />
//         </div>
//     );
// }
  
// export default App

//  ************** Learning phase 3 ********
/*
How to manage a simple scaler using useState
(how to manage an array)
*/
// create an array

// import { useState } from 'react'

// function NameList() {
//   const [list, setList] = useState(["Jack", "Jill", "John"]);

//   return (
//     <div>
//       <ul>
//         {list.map((name) => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(10);

//   function addOne () {
//     setCount(count + 1);
//   }
//   return (
//     <div className='App'>
//     <button onClick={addOne}>Count = {count}</button>
//   </div>
//   );
// }

// function App() {
//     return(
//         <div>
//           <Counter />
//           <NameList />
//         </div>
//     );
// }
  
// export default App

//  ************** Learning phase 2 ********
// multiple function component

// import { useState } from 'react'

// function Counter() {
//   const [count, setCount] = useState(10);

//   function addOne () {
//     setCount(count + 1);
//   }
//   return (
//     <div className='App'>
//     <button onClick={addOne}>Count = {count}</button>
//   </div>
//   );
// }

// function App() {
//     return(
//         <div>
//           <Counter />
//           <Counter />
//           <Counter />
//           <Counter />
//         </div>
//     );
// }
  
// export default App

//  ************** Learning phase 1 ********
// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(10);

//   function addOne () {
//     setCount(count + 1);
//   }
//   return (
//     <div className='App'>
//     <button onClick={addOne}>Count = {count}</button>
//   </div>
//   ) 
  
// }

// export default App
