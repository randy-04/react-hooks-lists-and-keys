import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  function ColorItem(props) {
    return <li style={{color: props.color}}>{props.color}</li>;
  }
  const aurora = colors.map((color) => {
    return <ColorItem key={color} color={color} />;
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {aurora}
      </ol>
      
    </div>
  );
}

export { ColorList };
