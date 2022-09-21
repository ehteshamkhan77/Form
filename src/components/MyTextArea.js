import React from "react";

function MyTextArea(props) {
  return (
    <div>
      <label> {props.label} </label> <br></br>
      <textarea
        type={props.type}
        className={props.className}
        name={props.name}
        //value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        style={props.error && { border:"solid 1px red"}}
      ></textarea>
      {<p>{props.error}</p>}
      <br></br>
    </div>
  );
}
export default MyTextArea;
