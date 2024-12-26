import React from 'react';

const TableComponent = ({ data, clearData }) => {
  return (
    <div>
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
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.expenses}</td>
              <td>{row.sales}</td>
              <td>{row.inventory}</td>
              <td>{row.debt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={clearData}>Clear</button>
    </div>
  );
};

export default TableComponent;