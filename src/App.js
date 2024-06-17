import logo from './logo.svg';
import './App.css';
import Planner from './pages/planner/Planner';
import { AppProvider } from './AppContext';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Planner/>
      </AppProvider>
      
    </div>
  );
}

export default App;