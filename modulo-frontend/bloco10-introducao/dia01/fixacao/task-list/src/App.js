/* Crie uma lista de tarefas simples que:
Utilize a função Task dentro do componente App.
Leia as tarefas de dentro de um Array.
Use a função map para criar cada item da lista no HTML.
*/

import './App.css'

// Criando as LI com parametro
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
// Tarefas
const tasks = ['Trabalhar', 'Estudar', 'Comer', 'Estudar', 'Pãozinho com manteiga', 'Jogar', 'Dormir'];
const tasksNumbers = ['Trabalhar', 'Assistir Séries', 'Comer', 'Jogar', 'Dormir'];

// Aqui é o componente de função
function App() {
  return (<header>
    <div className='ulList'><ul>{ tasks.map(tasks => Task(tasks)) }</ul></div>
  <div className='olList'><ol>{ tasksNumbers.map(tasks => Task(tasks)) }</ol></div>
  </header>)
}

export default App;
