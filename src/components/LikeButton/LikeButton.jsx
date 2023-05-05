import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LikeButton() {

  const [guest, setGuest] = useState(0);

  useEffect(() => {
    async function fetchGuests() {
      const response2 = await axios.get("/api/guest/add");
      setGuest(response2.data);
    };

    fetchGuests();
  }, []);

  return (
    <>
      <p>此網站已被瀏覽{guest}次。</p>
    </>
  );
}

export default LikeButton