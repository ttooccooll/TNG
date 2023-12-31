import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BitcoinDifficulty() {
  const [difficulty, setdifficulty] = useState(null);

  useEffect(() => {
    const getdifficulty = () => {
      axios
        .get('https://blockchain.info/q/getdifficulty')
        .then((res) => {
          setdifficulty(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getdifficulty();

    const intervalId = setInterval(getdifficulty, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p>
      security-status - {difficulty}
    </p>
  );
}

export default BitcoinDifficulty;
