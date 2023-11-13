
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
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="container">
      {window.location.pathname != '/login' ? <div className="side-bar"><SideBar/ ></div> : null }
      <div className="app">
        <PrivateRoute path="/" exact component={InventoryListPage}/>
        <Route path="/login" exact component={LoginPage}/>
        <PrivateRoute path="/item/:id" exact component={InventoryPage}/>
        <PrivateRoute path="/item/:id/edit" exact component={EditItemPage}/>

      </div>
      </div>
    </Router>
  );
}

export default App;
