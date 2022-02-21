import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos'
// import TodosList from './components/TodosList'

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
       <Todos />
       {/* <Todos /> */}
       <DisplayTodos />
    </div>
  );
}

export default App;
