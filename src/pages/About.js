import React from "react";
import MetaTags from "react-meta-tags";

class About extends React.Component {
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
