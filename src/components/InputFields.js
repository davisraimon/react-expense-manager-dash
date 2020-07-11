import React, { useState, useEffect } from "react";
import { TextField, IconButton, Button } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import "./InputFields.css";
import MenuItem from "@material-ui/core/MenuItem";

export default function InputFields(props) {
  const [desc, setDesc] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("+");

  function handleClick() {   
    if (!emptyCheck()) {
      clearll() 
      document.getElementById("desc").focus(); 
      props.click([desc, value, type]);
    }
  }
  function emptyCheck() {
    if ( desc && value && type) {
      return false;
    } else {
      return true;
    }
  }
  function clearll(){
    setDesc("");
    setValue("");
  }
  return (
    <div className="inline-comp">
      <div className="inline-comp">
        <TextField
          className="field-width"
          id="standard-select-currency"
          variant="outlined"
          label=""
          value={type}
          size="small"
          onChange={(e) => setType(e.target.value)}
        ></TextField>
      </div>
      <div className="inline-comp">
        <TextField
          className="inline-comp"
          variant="outlined"
          label="Description"
          id="desc"
          value={desc}
          size="small"
          onChange={(e) => setDesc(e.target.value)}
        ></TextField>
      </div>
      <div className="inline-comp">
        <TextField
          className="field-width-value"
          variant="outlined"
          label="₹"
          value={value}
          size="small"
          onChange={(e) => setValue(e.target.value)}
        ></TextField>
      </div>
      <div className="inline-comp position-last">
        <Button onClick={handleClick}>
          <CheckCircleOutlineIcon className="padding-comp"></CheckCircleOutlineIcon>
        </Button>
      </div>
    </div>
  );
}
