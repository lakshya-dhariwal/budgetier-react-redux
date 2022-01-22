import Nav from "./components/Nav.js";
import Expenses from "./components/Expenses.js";
import Income from "./components/Income.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App min-h-screen min-w-full flex text-xl">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/expenses">
            <Expenses />
          </Route>
          <Route path="/income">
            <Income />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
