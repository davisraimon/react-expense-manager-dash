import React from "react";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

function ListItemExpenseComponent(props) {
  return (
    console.log(props.description),
    (
      <div className="card">
        <ListItem>
          <ListSubheader style={{ color: `${props.type}` }}>
            {props.value}$
          </ListSubheader>
          <ListItemText>{props.description}</ListItemText>
        </ListItem>
      </div>
    )
  );
}

export default ListItemExpenseComponent;
