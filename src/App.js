import React from "react";
import "./App.css";
import ListExpense from "./components/ListExpense";
import { Document, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
  };
  function readPDF() {
    alert("asd");
  }
  return (
    <div className="Login">
      <h1 className="App-header">Expense Calculator</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm column-attr-center">
            <ListExpense></ListExpense>
            <Document file="/sample.pdf" onLoadSuccess={readPDF} options={options}></Document>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
