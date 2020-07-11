import React, { useState } from "react";
import { List,Paper,Container } from "@material-ui/core";
import InputFields from "./InputFields";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


function ListExpense(props) {
  const [initialList, setInitiallist] = useState([]);
  let netAmount = 0;

  function handleClick(e, values) {
    var temp = [];
    temp = {
      id: initialList.length + 1,
      type: e[2],
      value: e[1],
      desc: e[0],
    };
    setInitiallist((oldArry) => [...oldArry, temp]);
  }
  function setColor(e){
    let color = ""
    e.type=='+'?color='green':color='red'
    e.type=='+'?netAmount=netAmount+parseInt(e.value):netAmount=netAmount-parseInt(e.value)
    return color
  }
  return (
    <Container>
    <div className="card">
      <InputFields click={handleClick}></InputFields>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
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
            <TableCell style={{width:20,color:`${setColor(row)}`}} align="left">{row.type}{row.value}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
      </TableContainer>
    </div>
    </Container>
  );
}

export default ListExpense;
