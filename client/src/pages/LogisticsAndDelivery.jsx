import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavForAll from '../components/NavForAll';


const LogisticsAndDelivery = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [goodsDetails, setGoodsDetails] = useState("");

  const handlePickupChange = (e) => {
    setPickupLocation(e.target.value);
  };

  const handleDeliveryChange = (e) => {
    setDeliveryLocation(e.target.value);
  };

  const handleGoodsDetailsChange = (e) => {
    setGoodsDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pickup: ${pickupLocation}, Delivery: ${deliveryLocation}, Goods: ${goodsDetails}`);
  };

  return (
    <>
    <NavForAll/>
    <div className="container mt-5">
      <h1 className="text-center mb-4">Logistics and Delivery Integration</h1>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="pickupLocation" className="form-label">Pickup Location</label>
          <input
            type="text"
            id="pickupLocation"
            className="form-control"
            value={pickupLocation}
            onChange={handlePickupChange}
            placeholder="Enter pickup location"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="deliveryLocation" className="form-label">Delivery Location</label>
          <input
            type="text"
            id="deliveryLocation"
            className="form-control"
            value={deliveryLocation}
            onChange={handleDeliveryChange}
            placeholder="Enter delivery location"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="goodsDetails" className="form-label">Goods Details</label>
          <textarea
            id="goodsDetails"
            className="form-control"
            value={goodsDetails}
            onChange={handleGoodsDetailsChange}
            placeholder="Describe the goods to be delivered"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
    </>
  );
};

export default LogisticsAndDelivery;
