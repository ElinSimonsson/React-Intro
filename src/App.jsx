import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Name = (props) => {
  return (
    <h2>Jag heter {props.name}</h2>
  )
}

const TodoItem = (props) => {

  return (
    <li>{props.text} <DoneButton done={props.done}/></li>
  );
}

const DoneButton = (props) => {

  const [done, setDone] = useState(props.done);

  let todoDone = 'Ej klar';

  if (done === true) {
    todoDone = 'Klar';
  } 

  return (
    <button onClick={ () => setDone(!done)}>{todoDone}</button>
  );
}

const AddItem = (props) => {
  const [input, setInput] = useState('');

  const addAndClear = () => {
    //console.log(input);
    props.handleAdd(input);
    setInput('');
  }

  return (
    <div>
      <input type="text" value={input} onInput={e => setInput(e.target.value)} />
      <button onClick={addAndClear}>Add</button>
    </div>

  );
}

function App() {
  const item = {text: 'Köp mjölk', done: false};
  const defaultValue = [item, {text: 'tomat', done: true}];
  const [todoList, setTodoList] = useState(defaultValue);

  const todoItems = todoList.map((item, index) => (
    <TodoItem text ={item.text} done={item.done} />
  ))

  const addItem = (itemText) => {
    const newItem = {text:itemText, done: false};
    setTodoList([...todoList, newItem]);
  }

 return (
  <div className='App'>
    <h1>To-do list</h1>
    <ul className='todo-list'>
      {todoItems}
    </ul>
    <AddItem handleAdd={addItem}/>
  </div>
 );
   
}

export default App
