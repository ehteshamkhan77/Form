import React from "react";

function Checkbox(props) {
  return (
    <div>
      <input
        type={props.type}
        className={props.className}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.value}
        placeholder={props.placeholder}
      ></input>
      <label htmlFor={props.name}> {props.label} </label>
    </div>
  );
}
export default Checkbox;










