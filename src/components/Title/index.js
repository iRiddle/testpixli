import React from "react";

const Title = props => {
  const { h1, h2 } = props;
  return h1 ? <h1>{h1}</h1> : <h2>{h2}</h2>;
};

export default Title;
