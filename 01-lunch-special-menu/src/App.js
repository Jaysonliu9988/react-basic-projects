import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [lunch, setLunch] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{lunch.length} Lunch Specials Today</h3>
        <List lunch={lunch}/>
        <button onClick={() => setLunch([])}>clear all</button>
      </section>
    </main>
  )
}

export default App;
