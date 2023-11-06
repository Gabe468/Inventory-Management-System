
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import InventoryListPage from './pages/InventoryListPage'
import InventoryPage from "./pages/InventoryPage";
import EditItemPage from "./pages/EditItemPage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
      <div className="container">
        <SideBar/ >
      <div className="app">
        <Header/ >
        <Route path="/" exact component={InventoryListPage}/>
        <Route path="/item/:id" exact component={InventoryPage}/>
        <Route path="/item/:id/edit" exact component={EditItemPage}/>
      </div>
      </div>
    </Router>
  );
}

export default App;
