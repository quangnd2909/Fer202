import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup"; // Sửa thành Signup
import welcome from "./components/welcome";
import forgotpassword from "./components/forgotpassword";
import SearchPosts from "./components/SearchPosts";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={welcome} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/welcome" component={welcome} />
        <Route path="/forgotpassword" component={forgotpassword} />
        <Route path="/search-posts" component={SearchPosts} />
      </Switch>
    </Router>
  );
}

export default App;