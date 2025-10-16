import logo from './logo.svg';
import './App.css';
import Sender from './components/Sender';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App">
      <Sender></Sender>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
