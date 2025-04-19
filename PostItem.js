import React, { useState } from 'react';
import axios from 'axios';

function PostItem() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    startBid: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token'); // Get JWT token
      const res = await axios.post(
        'http://localhost:5000/api/items/post',
        form,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      alert('✅ Item posted successfully!');
    } catch (err) {
      alert('❌ Error posting item: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Post New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={form.name}
          onChange={handleChange}
          required
        /><br /><br />

        <textarea
          name="description"
          placeholder="Item Description"
          value={form.description}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="number"
          name="startBid"
          placeholder="Starting Bid"
          value={form.startBid}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Post Item</button>
      </form>
    </div>
  );
}

export default PostItem;
