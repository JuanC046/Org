import './App.css';

// Componentes
import Header from './components/header/Header';
import Form from './components/Form/Form';
function App() {
  return (
    <div className="App">
      {/* Lo que se encuentra entre llaves se interpreta como codigo javascript  */}
      <Header /> 
      <Form />
    </div>
  );
}

export default App;
