// import React from "react";

// const Checkbox = (props) => {
//     const [checkedOne, setCheckedOne] = React.useState(false);
//     const [checkedTwo, setCheckedTwo] = React.useState(false);
  
//     const handleChangeOne = () => {
//       setCheckedOne(!checkedOne);
//     };
  
//     const handleChangeTwo = () => {
//       setCheckedTwo(!checkedTwo);
//     };
  
//     return (
//       <div>
//         <label> {props.label} </label>
//         <Checkbox
//           value={props.value}
//           onChange={props.onChange}
          
//         />
//         <Checkbox
//           value={props.value}
//           onChange={props.onChange}
//         />
//       </div>
//     );
//   };
  
//   export default Checkbox;

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
