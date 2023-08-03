
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import { Switch } from "react-router-dom/cjs/react-router-dom";

import { Route } from "react-router-dom/cjs/react-router-dom.min";
import ContactDetail from "./components/ContactDetail/ContactDetail";

import EditContact from "./components/EditContact/EditContact";

function App() {
  return (
    <main className="App">
      <h1>Contact App</h1>
      <Switch>
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/user/:id" component={ContactDetail} />
        <Route path="/add" component={AddContact} />
        <Route path="/" exact component={ContactList} />
      </Switch>
    </main>
  );
}

export default App;
