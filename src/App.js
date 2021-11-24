import './App.css';

import Aside from './components/Aside';
import Form from './components/Form';
import Section from './components/Section';

function App() {
  return (
    <main>
      <Aside />
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
