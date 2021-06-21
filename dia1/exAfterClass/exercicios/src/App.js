import './App.css';

const Task = (value) => (
  (
    <li>{value}</li>
  )
);

const tasks = ['Estudar React', 'Fazer a sistematização', 'Limpar a casa'];

function App() {
  return tasks.map((task) => Task(`${task};`));
}


export default App;
