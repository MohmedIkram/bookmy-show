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
import Banners from "./components/Banners";
import MovieSelect from "./components/MovieSelect";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Home">
            <SearchBar />
            <SecondAppBar />
            <Banners />
            <MovieSelect />
          </Route>
          <Route exact path="/Book">
            <Book />
          </Route>
          <Route exact path="/ticket">
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
