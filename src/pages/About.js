import React from "react";
import MetaTags from "react-meta-tags";
import Loading from "../components/Loading";

class About extends React.Component {
  state = {
    isLoading: true,
    color: "pink",
    data: []
  };
  componentDidMount = async () => {
    setTimeout(this.handleChange, 2000);
    await fetch("../data.json")
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result
        });
      });
  };
  handleChange = () => {
    if (this.state.isLoading) {
      var A = document.getElementById("loading");
      A.style.animation = "fadeOut 0.5s forwards";
      A.addEventListener("animationend", () =>
        this.setState({
          isLoading: false
        })
      );
    }
  };

  render() {
    return (
      <div>
        <MetaTags>
          <title>About | Ernie's Website</title>
          <meta name="description" content="AboutPage" />
        </MetaTags>
        {this.state.isLoading && <Loading />}
        ABOUT
        <div>
          {this.state.data.map((data, i) => (
            <h1 key={i}>{data.title}</h1>
          ))}
        </div>
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
