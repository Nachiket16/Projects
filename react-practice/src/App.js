import './App.css';
import Header from './component/Header';
import Todo from './component/Todo';
import Todos from './component/Todos';
import Footer from './component/Footer';
function App() {
  let todos = [
    {
      sno:1,
      title: "Complete Java revision",
      desc: "You have to complete the Imp topic of Java"
    },
    {
      sno:2,
      title: "Complete React revision",
      desc: "You have to complete the Imp topic of React"
    },
    {
      sno:3,
      title: "Complete MySQL revision",
      desc: "You have to complete the Imp topic of MySQL"
    }
  ]
  return (
      <>
        <Header title=" ToDo APP"/>
        <Todos todos={todos}/>
        <Footer />
      </>
  );
}

export default App;
