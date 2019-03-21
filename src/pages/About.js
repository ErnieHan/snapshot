import React from "react";
import MetaTags from "react-meta-tags";

class About extends React.Component {
  componentDidMount = async () => {
    await fetch("../data.json")
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result
        });
      });
  };

  render() {
    return (
      <div>
        <MetaTags>
          <title>About | Ernie's Website</title>
          <meta name="description" content="AboutPage" />
        </MetaTags>
        ABOUT
      </div>
    );
  }
}

export default About;
