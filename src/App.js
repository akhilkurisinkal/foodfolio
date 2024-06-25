import logo from './logo.svg';
import './App.css';
import Planner from './pages/planner/Planner';
import { AppProvider } from './AppContext';
import AddMeal from './components/addMeal/AddMeal';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Planner/>
        <AddMeal/>
      </AppProvider>
      
    </div>
  );
}

export default App;