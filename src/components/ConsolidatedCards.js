import React from "react";
import "../App.css";
import { Card, Typography } from "@material-ui/core";

export default function ConsolidatedCards(props) {
  return (
    <Card className="card-dim inline-comp">
      <Typography
        className="typo-dim"
        color="textSecondary"
        gutterBottom
        style={{ color: `${props.color}` }}
      >
        {props.title}
      </Typography>
      <Typography
        className="typo-dim"
        color="textSecondary"
        variant="h4"
        component="h2"
      >
        {props.netAmount}
      </Typography>
    </Card>
  );
}
