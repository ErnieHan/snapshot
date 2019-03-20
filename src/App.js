import React, { Component } from "react";
import "./App.css";
import MetaTags from "react-meta-tags";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./pages/About";

function Index() {
  return (
    <div className="App">
      <MetaTags>
        <title>Home | Ernie's Website</title>
        <meta
          name="description"
          content="有沒有出現我有沒有出現我有沒有出現我有沒有出現我"
        />
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>
      <h1>HELLO EVERYONE!!!</h1>
    </div>
  );
}

function Users() {
  return (
    <h2>
      <MetaTags>
        <title>USER</title>
        <meta name="description" content="USERUSERUSERUSER" />
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>
      Users
    </h2>
  );
}

function Page404() {
  return (
    <h1>
      <MetaTags>
        <title>PAGE404</title>
        <meta name="description" content="PAGE404PAGE404PAGE404" />
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>
      PAGE404
    </h1>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            {/* {console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL)} */}
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
