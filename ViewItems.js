import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Auction Items</h2>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {items.map(item => (
            <div key={item._id} style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><strong>Starting Bid:</strong> ₹{item.startingBid}</p>
              <p><strong>Posted By:</strong> {item.user?.email || 'Unknown'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewItems;
