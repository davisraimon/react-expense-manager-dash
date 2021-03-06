import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import "./InputFields.css";
import MenuItem from "@material-ui/core/MenuItem";

export default function InputFields(props) {
  const [desc, setDesc] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("+");

  function handleClick() {
    if (!emptyCheck()) {
      clearll();
      document.getElementById("desc").focus();
      props.click([desc, value, type]);
    }
  }
  function emptyCheck() {
    if (desc && value && type) {
      return false;
    } else {
      return true;
    }
  }
  function clearll() {
    setDesc("");
    setValue("");
  }
  return (
    <div className="mb">
      <div className="inline-comp">
        <TextField
          variant="outlined"
          size="small"
          id="standard-select-currency"
          select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem key="+" value="+">
            +
          </MenuItem>
          <MenuItem key="-" value="-">
            -
          </MenuItem>
        </TextField>
      </div>
      <div className="inline-comp pf">
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
      <div className="inline-comp pf">
        <TextField
          type="number"
          className="field-width-value"
          variant="outlined"
          label="₹"
          value={value}
          size="small"
          onChange={(e) => setValue(e.target.value)}
        ></TextField>
      </div>
      <div className="inline-comp position-last pf">
        <Button onClick={handleClick}>
          <CheckCircleOutlineIcon className="padding-comp"></CheckCircleOutlineIcon>
        </Button>
      </div>
    </div>
  );
}
