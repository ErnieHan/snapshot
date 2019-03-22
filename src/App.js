import React from "react";
import "./css/App.css";
import MetaTags from "react-meta-tags";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Layout from "./components/Layout";
import Index from "./pages/Home";
import Loading from "./components/Loading";

function Users() {
  return (
    <div>
      <MetaTags>
        <title>USER</title>
        <meta name="description" content="USERUSERUSERUSER" />
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>
      <h2>Users</h2>
    </div>
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
  state = {
    isLoading: true
  };
  componentDidMount = () => {
    setTimeout(this.Loading, 3000);
  };
  Loading = () => {
    console.log("close");
    this.setState({
      isLoading: false
    });
  };
  removeLoading = () => {};
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Layout>
          {this.state.isLoading && <Loading />}
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
            <Route component={Page404} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
