import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LikeButton({ itemId }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchLikes() {
      const response = await axios.get(`https://delightroom.ga/reckon`);
      setCount(response.data.count);
    }

    fetchLikes();
  }, [itemId]);

  async function handleLike() {
    const response = await axios.get(`https://delightroom.ga/countplus/`);
    setCount(response.data.count);
  }

  return (
    <button onClick={handleLike}>
      {count} likes
    </button>
  );
}

export default LikeButton