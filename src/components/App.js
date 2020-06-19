import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={StreamList}></Route>
            <Route exact path="/streams/new" component={StreamCreate}></Route>
            <Route
              exact
              path="/streams/delete/:id"
              component={StreamDelete}
            ></Route>
            <Route
              exact
              path="/streams/edit/:id"
              component={StreamEdit}
            ></Route>
            <Route exact path="/streams/:id" component={StreamShow}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
