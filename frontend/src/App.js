import React, { useEffect, useState } from 'react';
import api from './backend/api';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Application Frontend</h1>
      {data ? (
        <p>{data.message} (Timestamp: {data.timestamp})</p>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default App;
