import "./App.css";
import LoginPage from "./components/LoginPage";
import SecondAppBar from "./components/SecondAppBar";
import SearchBar from "./components/SearchBar";
import SignUp from "./components/SignUp";
import Billing from "./components/Billing";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResetPassword from "./components/ResetPassword";
import SendEmail from "./components/SendEmail";
import Book from "./components/Book";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Home">
            <SearchBar />
            <SecondAppBar />
          </Route>
          <Route exact path="/Book">
            <Book />
          </Route>
          <Route exact path="/Billing">
            <Billing />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/forgot-password">
            <SendEmail />
          </Route>
          <Route exact path="/ResetPassword/:resetToken">
            <ResetPassword />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
