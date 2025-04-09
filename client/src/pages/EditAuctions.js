// src/pages/EditAuction.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuctionForm from '../components/AuctionForm';
import { useNavigate, useParams } from 'react-router-dom';

const EditAuction = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ title: '', price: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/auctions`)
      .then(res => {
        const item = res.data.find(i => i._id === id);
        if (item) setFormData(item);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/auctions/${id}`, formData)
      .then(() => navigate('/auctions'));
  };

  return (
    <div>
      <h2>Edit Auction</h2>
      <AuctionForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
    </div>
  );
};

export default EditAuction;
