import { useState } from 'react'


function App() {
  const [count, setCount] = useState(10);
  return (
    <div className='App'>
    <button>Count = {count}</button>
  </div>
  ) 
  
}

export default App
