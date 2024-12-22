import React, { useState } from 'react';
import './styles.css'; // Ensure this imports your CSS

const FormComponent = () => {
  const [formData, setFormData] = useState({
    expenses: '',
    sales: '',
    inventory: '',
    debt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here if needed
    console.log(formData);
    // Reset form fields
    setFormData({
      expenses: '',
      sales: '',
      inventory: '',
      debt: '',
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="expenses">Expenses</label>
        <input type="text" name="expenses" value={formData.expenses} onChange={handleChange} />
        <label htmlFor="sales">Sales</label>
        <input type="text" name="sales" value={formData.sales} onChange={handleChange} />
        <label htmlFor="inventory">Inventory</label>
        <input type="text" name="inventory" value={formData.inventory} onChange={handleChange} />
        <label htmlFor="debt">Debt</label>
        <input type="text" name="debt" value={formData.debt} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;