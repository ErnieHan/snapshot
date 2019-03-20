import React from "react";
import MetaTags from "react-meta-tags";

class About extends React.Component {
  state = {
    isLoading: true,
    color: "pink"
  };
  componentDidMount = () => {
    setTimeout(this.handleChange, 2000);
  };
  handleChange = () => {
    this.setState({
      isLoading: false
    });
  };
  render() {
    return (
      <div>
        <MetaTags>
          <title>About | Ernie's Website</title>
          <meta
            name="description"
            content="有沒有出現我有沒有出現我有沒有出現我有沒有出現我"
          />
        </MetaTags>
        {this.state.isLoading && (
          <h1 style={{ textAlign: "center" }}>LOADING</h1>
        )}
        ABOUT
        <button
          style={{ background: this.state.color }}
          onClick={() =>
            this.setState({
              color: "lightblue"
            })
          }
        >
          Change
        </button>
      </div>
    );
  }
}

export default About;
