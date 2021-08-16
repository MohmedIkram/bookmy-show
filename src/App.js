import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import SendEmail from "./components/SendEmail";
import ResetPassword from "./components/ResetPassword";
import Book from "./components/Book";
import Billing from "./components/Billing";
import SearchBar from "./components/SearchBar";
import SecondAppBar from "./components/SecondAppBar";

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
