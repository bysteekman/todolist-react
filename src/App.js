import { useEffect, useState } from 'react';
import './App.css';

import Aside from './components/Aside';
import Form from './components/Form';
import Section from './components/Section';

// const getLists = () => {
//   return fetch("https://localhost:5001/api/Lists",)
//     .then(response => response.json());
// }

const App = () => {
  const todoLists = [
    {id: 1, title: 'list1'},
    {id: 2, title: 'list2'},
    {id: 3, title: 'list3'},
    {id: 4, title: 'list4'},
  ];
  return (
    <main>
      <Aside todoLists={todoLists}/>
      <article>
        <section className="list_tasks">
          <Section />
          <Section />
          <Section />
        </section>
        <Form />
      </article>
    </main>
  )
}

export default App;
