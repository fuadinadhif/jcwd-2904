import React from "react";

function Decoration() {
  console.info("Decoration Rendered");

  return <div style={{ marginTop: "24px", fontSize: "48px" }}>👑</div>;
}

export default React.memo(Decoration);
