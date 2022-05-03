import './App.css';
import { Header } from './components/header/Header';
import { BookerContext } from './context/BookerContext';

function App() {
  return (
    <BookerContext>
    <div className="App">
      <Header />
    </div>
    </BookerContext>
  );
}

export default App;
