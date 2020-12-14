import React from "react";

import {
  Switch,
  Route
} from "react-router-dom";

import SearchContacts from "./searchContacts";
import ContactPage from "./contactPage";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <h1>ACME Contact Directory</h1>
        <Switch>
          <Route exact path="/">
            <SearchContacts/>
          </Route>
          <Route path="/search/">
            <SearchContacts/>
          </Route>
          <Route path="/contact/:contactId">
            <ContactPage/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
