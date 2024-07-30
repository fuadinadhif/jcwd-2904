import React from "react";

function MegaBoost(props) {
  console.info("MegaBoost Rendered");

  return (
    <div>
      <button onClick={props.handleClick}>MEGA BOOST!</button>
    </div>
  );
}

export default React.memo(MegaBoost);
