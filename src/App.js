import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [person, setPerson] = useState(data);
  return <main>
    <section className='container'>
      <h3>0 birthdays today</h3>
      <List person = {person}/>
      <button onClick={()=> setPerson()}>Clear All</button>

    </section>
  </main>
}

export default App;
