const tasks = ['Estudar React', 'Fazer a sistematização', 'Limpar a casa'];

function App() {
  return tasks.map((task) => <li>{task};</li>);
}

export default App;
