import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    expenses: '',
    sales: '',
    inventory: '',
    debt: '',
  });
  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the current form data to the table
    setTableData((prev) => [...prev, formData]);
    // Reset form fields
    setFormData({
      expenses: '',
      sales: '',
      inventory: '',
      debt: '',
    });
  };

  const handleClear = () => {
    setTableData([]); // Clear the table data
  };

  return (
    <div className="App">
      <h1>Input Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Expenses:
          <input
            type="text"
            name="expenses"
            value={formData.expenses}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sales:
          <input
            type="text"
            name="sales"
            value={formData.sales}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Inventory:
          <input
            type="text"
            name="inventory"
            value={formData.inventory}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Debt:
          <input
            type="text"
            name="debt"
            value={formData.debt}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>
          Clear Table
        </button>
      </form>

      <h2>Submitted Data</h2>
      {tableData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Expenses</th>
              <th>Sales</th>
              <th>Inventory</th>
              <th>Debt</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.expenses}</td>
                <td>{row.sales}</td>
                <td>{row.inventory}</td>
                <td>{row.debt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data to display.</p>
      )}
    </div>
  );
}

export default App;
