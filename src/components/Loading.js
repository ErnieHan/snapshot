import React from "react";
import "./Loading.css";

class Loading extends React.Component {
  render() {
    return (
      <div className="loading" id="loading">
        <style jsx>{`
          .loading {
            position: fixed;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 36px;
            background: #333;
            z-index: 99;
            color: white;
            font-weight: bolder;
          }
        `}</style>
        Loading
      </div>
    );
  }
}

export default Loading;
