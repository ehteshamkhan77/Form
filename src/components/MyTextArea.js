import React  from "react";

function MyTextArea(props) {
  // const [values, setValues] = useState({
  //   textArea: "",
  // });
  // const handleTextArealInputChange = (event) => {
  //   setValues({ ...values, textArea: event.target.value });
  // };
  return (
    <div>
      <label> {props.label} </label> <br></br>
      <textarea
        type={props.type}
        className={props.className}
        //value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      ></textarea>
      <br></br>
    </div>
  );
}
export default MyTextArea;
