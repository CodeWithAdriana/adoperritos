import React from "react";

function Tags({ texto, color }) {
  const className = `btn btn-${color} badge`;
  return (
    <button type="button" className={className}>
      {texto}
    </button>
  );
}

export default Tags;
