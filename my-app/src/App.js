import React, { useState } from 'react';
import './App.css';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';
import './styles.css';

function App() {
  const [tableData, setTableData] = useState([]);

  const addData = (data) => {
    setTableData((prev) => [...prev, data]);
  };

  const clearData = () => {
    setTableData([]);
  };

  return (
    <div className="App">
      <h1>My Form</h1>
      <FormComponent addData={addData} />
      <TableComponent data={tableData} clearData={clearData} />
    </div>
  );
}

export default App;