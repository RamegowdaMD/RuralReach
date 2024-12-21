import React from 'react';

const TrackSales = ({ sales }) => (
  <div className="container mt-4">
    <h2>Sales History</h2>
    {sales.length === 0 ? (
      <p>No sales recorded yet.</p>
    ) : (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity Sold</th>
            <th>Buyer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.name}</td>
              <td>{sale.quantitySold}</td>
              <td>{sale.name}</td>
              <td>{sale.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default TrackSales;