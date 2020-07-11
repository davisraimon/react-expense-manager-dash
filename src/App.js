import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListExpense from "./components/ListExpense";
import { Paper, TextField } from "@material-ui/core";
import ConsolidatedCards from './components/ConsolidatedCards'

function App() {
  return (
    <div className="Login">
      <h1 className='App-header'>Expense Calculator</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm column-attr"></div>
          <div className="col-sm column-attr-center">
            <ListExpense></ListExpense>
          </div>
          <div className="col-sm column-attr"><ConsolidatedCards></ConsolidatedCards></div>
        </div>
        <div className="row">
          <div className="col-sm column-attr"></div>
          <div className="col-sm column-attr"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
