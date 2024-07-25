import React, { useState } from 'react'

function HomePage() {

  const [count, setCount] = useState(0);
  function up() {
    setCount(count + 1);
  }
  return (
   
    <div>
      <h1>Home page</h1>
      <button onClick={up}>Tăng</button>
      {count}
    </div>
  )
}

export default HomePage;
