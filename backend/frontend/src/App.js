
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import InventoryListPage from './pages/InventoryListPage'
import InventoryPage from "./pages/InventoryPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/ >
        <Route path="/" exact component={InventoryListPage}/>
        <Route path="/item/:id" exact component={InventoryPage}/>
      </div>
    </Router>
  );
}

export default App;
