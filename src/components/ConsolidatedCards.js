import React from "react";
import "../App.css";
import { Card, Typography } from "@material-ui/core";

export default function ConsolidatedCards(props) {
  return (
    <Card className="card-dim">
      <Typography className="typo-dim" variant="h4" component="h2">
        {props.netAmount}
      </Typography>
    </Card>
  );
}
