import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import InputFields from "./InputFields";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "../App.css";
import ConsolidatedCards from "./ConsolidatedCards";
import Chart from "./Chart";

function ListExpense(props) {
  const [initialList, setInitiallist] = useState([]);
  const [labels, setLabels] = useState([]);
  const [colors, setColors] = useState([]);
  const [values, setValues] = useState([]);
  const [labelsexpense, setLabelsexpense] = useState([]);
  const [colorsexpense, setColorsexpense] = useState([]);
  const [valuesexpense, setValuesexpense] = useState([]);
  let netAmount = 0.0;
  let netIncome = 0.0;
  let netExpense = 0.0;

  function handleClick(e, values) {
    var temp = [];
    var tempColor =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    temp = {
      id: initialList.length + 1,
      type: e[2],
      value: e[1],
      desc: e[0],
    };
    setInitiallist((oldArray) => [...oldArray, temp]);
    if (e[2] === "+") {
      setLabels((oldArray) => [...oldArray, e[0]]);
      setValues((oldArray) => [...oldArray, e[1]]);
      setColors((oldArray) => [...oldArray, tempColor]);
    } else {
      setLabelsexpense((oldArray) => [...oldArray, e[0]]);
      setValuesexpense((oldArray) => [...oldArray, e[1]]);
      setColorsexpense((oldArray) => [...oldArray, tempColor]);
    }
  }
  function setColor(e) {
    let color = "";
    e.type === "+" ? (color = "green") : (color = "red");
    e.type === "+"
      ? (netAmount = netAmount + parseInt(e.value))
      : (netAmount = netAmount - parseInt(e.value));
    e.type === "+"
      ? (netIncome = netIncome + parseInt(e.value))
      : (netExpense = netExpense + parseInt(e.value));
    return color;
  }
  function setColorForCons() {
    let color = "";
    netAmount >= 0 ? (color = "green") : (color = "red");
    return color;
  }
  return (
    <div>
      <div className="row">
        <div className="col-sm col-width">
          <div className="card">
            <InputFields click={handleClick}></InputFields>
            <TableContainer component={Paper}>
              <Table aria-label="simple table" className="of-x">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">ID</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Expense/Returns</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {initialList.map((row, index) => (
                    <TableRow key={row.id}>
                      <TableCell align="left">{row.id}</TableCell>
                      <TableCell align="left">{row.desc}</TableCell>
                      <TableCell
                        style={{ width: 20, color: `${setColor(row)}` }}
                        align="left"
                      >
                        {row.type}
                        {row.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="col-sm card-div-dim inline-comp">
          <ConsolidatedCards
            color={setColorForCons()}
            title="Net Amount"
            netAmount={netAmount}
          ></ConsolidatedCards>
          <ConsolidatedCards
            color="red"
            title="Expense Sum"
            netAmount={netExpense}
          ></ConsolidatedCards>
          <ConsolidatedCards
            color="green"
            title="Returns Sum"
            netAmount={netIncome}
          ></ConsolidatedCards>
          <Chart labels={labels} colors={colors} values={values}></Chart>
          <Chart
            labels={labelsexpense}
            colors={colorsexpense}
            values={valuesexpense}
          ></Chart>
        </div>
      </div>
    </div>
  );
}

export default ListExpense;
