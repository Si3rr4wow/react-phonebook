import React from "react";
import { Link } from "react-router";

class Results extends React.Component {
  render() {
    const contents =
      this.props.data && this.props.data.length > 0 ? (
        <ol>
          {this.props.data.map((item, i) => (
            <li key={i}>
              <Link to={"/contact/" + item.name}>{item.name}</Link>
            </li>
          ))}
        </ol>
      ) : (
        <p className="results__none-msg">Sorry, we can't find that</p>
      );
    return <div className="results">{contents}</div>;
  }
}

export default Results;
