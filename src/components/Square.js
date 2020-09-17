import React from "react";
import "../styles/root.scss";

export default function Square({value, onClick}) {
  // console.log('Square Re-render')
  return <button type="button" className="square" onClick={onClick}>
    {value}
  </button>;
}
