
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import InventoryListPage from './pages/InventoryListPage'
import InventoryPage from "./pages/InventoryPage";
import EditItemPage from "./pages/EditItemPage";
import SideBar from "./components/SideBar";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="container">
      <div className="side-bar">
      <SideBar/ >
      </div>
      <div className="app">
        <Route path="/" exact component={InventoryListPage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/item/:id" exact component={InventoryPage}/>
        <Route path="/item/:id/edit" exact component={EditItemPage}/>
      </div>
      </div>
    </Router>
  );
}

export default App;
